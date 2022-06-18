import { checkStringLength } from './util.js';

function checkFormValidation () {
  const check = checkStringLength('check', 5);
  return check;
}

export {checkFormValidation};
