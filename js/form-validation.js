// import {bodyElement} from './browse-photos.js';
import {closeUploadForm} from './upload-form.js';

const textDescriptionFormElement = document.querySelector('.text__description');
const imgUploadFormElement = document.querySelector('.img-upload__form');
const pristine = new Pristine(textDescriptionFormElement, {
  classTo: 'description__label',
  errorTextParent: 'description__label',
  errorTextClass: 'description__error-text'
});

imgUploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closeUploadForm();

  const isValid = pristine.validate();
  if (isValid) {
    // eslint-disable-next-line no-console
    console.log('Можно отправлять');
  } else {
    // eslint-disable-next-line no-console
    console.log('Нельзя отправлять');
  }
});

export {textDescriptionFormElement};
