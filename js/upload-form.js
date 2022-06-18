import { checkStringLength } from './util.js';

function checkUploadForm () {
  const check = checkStringLength('check', 5);
  return check;
}

export {checkUploadForm};
