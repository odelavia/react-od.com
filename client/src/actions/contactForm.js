import { VALIDATE_FORM, SUBMIT_FORM } from './types';

export const validateForm =() => {
  return {
    type: VALIDATE_FORM,
    payload: validate,
  }
}

export const submitForm = () => {
  return {
    type: SUBMIT_FORM,
    payload: submitInfo,
  }
};