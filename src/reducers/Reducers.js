import { ADD_COMPANY, DELETE_COMPANY } from "../consts/actionTypes";

const inistialState = {
  companies: [],
};
const Reducers = (state = inistialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return { ...state, companies: [...state.companies, action.payload] };

    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter((comp) => comp.id !== action.payload),
      };
    default:
      return state;
  }
};
export default Reducers;
