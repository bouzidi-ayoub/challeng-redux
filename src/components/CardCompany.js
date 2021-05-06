import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


import { useDispatch,useSelector } from "react-redux";

import { deleteCompany } from "../actions";
import { Card } from "@material-ui/core";


const CardCompany = () => {
 const c= useSelector(state=>state.Reducers.companies)
 
  const dispatch = useDispatch();

  return (
    
    <Card>
      {console.log(c)}
      {c.map((comp) => {
        return (
          <>
            <CardContent key={comp.id}>
              
              <Typography
              
                color="textSecondary"
                gutterBottom
              >
                {comp.company}
              </Typography>
              <Typography variant="h5" component="h2">
                {comp.name}
              </Typography>
              <Typography color="textSecondary">
                {comp.note}
              </Typography>
              <button onClick={() => dispatch(deleteCompany(comp.id))}>
                {" "}
                Delete
              </button> 
              <button onClick={() => dispatch(deleteCompany(comp.id))}>
                {" "}
                Edit
              </button>

              </CardContent>
          </>
        );
      })}
    </Card>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     company: state.AppReducers.companies,
//   };
// };
export default (CardCompany);
