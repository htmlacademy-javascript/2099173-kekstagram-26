import {photoObjects} from './thumbnails.js';
import {isKeydownEscape}from './util.js';

const bigPictureSectionElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const commentsLoaderElement = document.querySelector('.comments-loader');
const bigPictureContainerElement = document.querySelector('.big-picture__img');
const bigPictureElement = bigPictureContainerElement.querySelector('img');
const socialCaptionElement = document.querySelector('.social__caption');
const likesCountElement = document.querySelector('.likes-count');
const socialCommentsCountElement = document.querySelector('.social__comment-count');
const commentsCountElement = document.querySelector('.comments-count');
const smallPicturesElements = document.querySelectorAll('.picture');
const cancelButtonElement = document.querySelector('#picture-cancel');
const socialCommentsContainerElement = document.querySelector('.social__comments');
const newCommentItem = document.createElement('li');
newCommentItem.classList.add('social__comment');
const newSocialPicture = document.createElement('img');
newSocialPicture.classList.add('social__picture');
const newCommentText = document.createElement('p');
newCommentText.classList.add('social__text');
commentsCountElement.classList.add('hidden');
commentsLoaderElement.classList.add('hidden');
socialCommentsCountElement.classList.add('hidden');

const onBigPictureEscKeydown = (evt) => {
  if (isKeydownEscape(evt)) {
    closePicture();
  }
};

function clearComments () {
  while (socialCommentsContainerElement.firstChild) {
    socialCommentsContainerElement.removeChild(socialCommentsContainerElement.firstChild);
  }
}

function showComments (photoObject) {
  for (let j=0; j<photoObject.comments.length; j++) {
    newSocialPicture.src = photoObject.comments[j].avatar;
    newSocialPicture.alt = photoObject.comments[j].name;
    newSocialPicture.width = '35';
    newSocialPicture.height = '35';
    newCommentText.classList.add('social__text');
    newCommentText.textContent = photoObject.comments[j].message;
    newCommentItem.append(newSocialPicture);
    newCommentItem.append(newCommentText);
    const newSocialComment = newCommentItem.cloneNode(true);
    socialCommentsContainerElement.append(newSocialComment);
  }
}

function openPicture (photoObject) {
  bigPictureSectionElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  clearComments ();
  showComments (photoObject);
  document.addEventListener('keydown', onBigPictureEscKeydown);
  cancelButtonElement.addEventListener('click', closePicture);
}

function closePicture () {
  bodyElement.classList.remove('modal-open');
  bigPictureSectionElement.classList.add('hidden');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  cancelButtonElement.removeEventListener('click', closePicture);
}

for (let i=0; i<smallPicturesElements.length; i++) {
  smallPicturesElements[i].addEventListener('click', () => {
    openPicture(photoObjects[i]);
    bigPictureElement.src = photoObjects[i].urlAdress;
    socialCaptionElement.textContent = photoObjects[i].description;
    likesCountElement.textContent = photoObjects[i].likes;
    commentsCountElement.textContent = photoObjects[i].comments.length;
  });
}

export {bodyElement};
