import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import RenderField from './RenderField';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={RenderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={RenderField}
        label="Last Name"
      />
      <div className="form-buttons">
        <button type="submit" className="next solid-button">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
