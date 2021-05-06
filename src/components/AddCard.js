import React, { useState } from "react";
import { connect } from "react-redux";
import { addCompany } from "../actions/index";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";

export const Addcards = (props) => {
  
 
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [newCompany, setNewCompany] = useState("");
  const [newName, setNewName] = useState("");
  const [newNote, setNewNote] = useState("");
  const addNewCompany = (e) => {
    e.preventDefault();
    props.addCompany({
      id: Math.random(),
      company: newCompany,
      name: newName,
      note: newNote,
    });
    setNewCompany("");
    setNewName("");
    setNewNote("");
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add contact
    
      </button>
      
      <Fade in={open}>
          <form onSubmit={addNewCompany}>
            <div >
              <h2 id="transition-modal-title">Add a company:</h2>
              <p>Companies</p>
              <input
                onChange={(e) => setNewCompany(e.target.value)}
                id="standard-basic"
                label="Company"
                value={newCompany}
              />
              <Divider light />
              <p>Name</p>
              <input
                onChange={(e) => setNewName(e.target.value)}
                id="standard-basic"
                label="Name"
                value={newName}
              />
              <Divider light />
              <p>Notes</p>
              <input
                onChange={(e) => setNewNote(e.target.value)}
                id="standard-basic"
                label="Notes"
                value={newNote}
              />
            </div>
            <button onClick={handleClose}> submit</button>
          </form>
        </Fade>
          </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCompany: (company) => dispatch(addCompany(company)),
  };
};
export default connect(null, mapDispatchToProps)(Addcards);
