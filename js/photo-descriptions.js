import { checkStringLength } from './util.js';

function checkPhotoDescription () {
  const check = checkStringLength('check', 5);
  return check;
}

export {checkPhotoDescription};
