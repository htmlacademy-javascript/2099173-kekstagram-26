import {bodyElement} from './browse-photos.js';
import {isKeydownEscape} from './util.js';
import {textDescriptionFormElement} from './form-validation.js';

const formDivElement = document.querySelector('.img-upload__overlay');
const uploadCancelButtonElement = document.querySelector('.img-upload__cancel');
const imgUploadInputElement = document.querySelector('#upload-file');
const onUploadFormEscKeydown = (evt) => {
  if (isKeydownEscape(evt)) {
    closeUploadForm();
  }
};

function openUploadForm () {
  bodyElement.classList.add('modal-open');
  formDivElement.classList.remove('hidden');
  uploadCancelButtonElement.addEventListener('click', closeUploadForm);
  document.addEventListener('keydown', onUploadFormEscKeydown);
}

function closeUploadForm () {
  bodyElement.classList.remove('modal-open');
  formDivElement.classList.add('hidden');
  document.removeEventListener('keydown', onUploadFormEscKeydown);
}

imgUploadInputElement.addEventListener('change', openUploadForm);

textDescriptionFormElement.onfocus = () => {
  document.removeEventListener('keydown', onUploadFormEscKeydown);
};

textDescriptionFormElement.onblur = () => {
  document.addEventListener('keydown', onUploadFormEscKeydown);
};

export {closeUploadForm};
