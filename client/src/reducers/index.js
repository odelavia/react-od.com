import { combineReducers } from 'redux';
import { reducer as reduxForm__Reducer } from 'redux-form';
import contactForm__reducer from './contactForm__reducer';
import navBar__reducer from './navBar__reducer';

const reducer = combineReducers({
  form: reduxForm__Reducer, // mounted under "form"
  contactForm: contactForm__reducer,
  navBar: navBar__reducer,
});

export default reducer;