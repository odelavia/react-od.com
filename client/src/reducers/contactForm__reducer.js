import { VALIDATE_FORM, SUBMIT_FORM } from '../actions/types';

const initialState = {
  validated: false,
  submit: false,
}

export default (state = initialState, action) => {
  console.log(action)

  switch(action.type) {
    // case VALIDATE_FORM:
    //   return {
    //     ...state,
    //     validated: action.payload,
    //   };
    // case SUBMIT_FORM:
    //   return {
    //     ...state,
    //     submit: action.payload,
    //   };
    default:
      return state;
  }
};