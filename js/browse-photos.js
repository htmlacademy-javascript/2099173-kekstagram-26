import {photoObjects} from './thumbnails.js';
import {isKeydownEscape}from './util.js';

const bigPictureSectionElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const commentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
const bigPictureContainerElement = document.querySelector('.big-picture__img');
const bigPictureElement = bigPictureContainerElement.querySelector('img');
const socialCaptionElement = document.querySelector('.social__caption');
const likesCountElement = document.querySelector('.likes-count');
const commentsCountElement = document.querySelector('.comments-count');
const smallPicturesElements = document.querySelectorAll('.picture');
const cancelButtonElement = document.querySelector('#picture-cancel');
const socialCommentListElement = document.querySelectorAll('.social__comment');
const onBigPictureEscKeydown = (evt) => {
  if (isKeydownEscape(evt)) {
    closePicture();
  }
};


function openPicture () {
  bigPictureSectionElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onBigPictureEscKeydown);
  cancelButtonElement.addEventListener('click', closePicture);
}

function closePicture () {
  bodyElement.classList.remove('modal-open');
  bigPictureSectionElement.classList.add('hidden');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

for (let i=0; i<smallPicturesElements.length; i++) {
  smallPicturesElements[i].addEventListener('click', () => {
    openPicture();
    bigPictureElement.src = photoObjects[i].urlAdress;
    socialCaptionElement.textContent = photoObjects[i].description;
    likesCountElement.textContent = photoObjects[i].likes;
    commentsCountElement.textContent = photoObjects[i].comments.length;
    for (let j=0; j<socialCommentListElement.length; j++) {
      const commentAvatarElement = socialCommentListElement[j].querySelector('.social__picture');
      const commentTextElement = socialCommentListElement[j].querySelector('.social__text');
      commentAvatarElement.src = photoObjects[i].comments[j].avatar;
      commentAvatarElement.alt = photoObjects[i].comments[j].name;
      commentTextElement.textContent = photoObjects[i].comments[j].message;
    }
  });
}

export {bodyElement};
