import {photoObjects} from './thumbnails.js';
const bigPicture = document.querySelector('.big-picture');
const bodyTag = document.querySelector('body');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bigPictureImgContainer = document.querySelector('.big-picture__img');
const bigPictureImg = bigPictureImgContainer.querySelector('img');
const socialCaption = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const smallPictures = document.querySelectorAll('.picture');
for (let i=0; i<smallPictures.length; i++) {
  smallPictures[i].addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    bigPictureImg.src = photoObjects[i].urlAdress;
    socialCaption.textContent = photoObjects[i].description;
    likesCount.textContent = photoObjects[i].likes;
    commentsCount.textContent = photoObjects[i].comments.length;
    const socialComments = document.querySelectorAll('.social__comment');
    for (let j=0; j<2; j++) {
      const commentAvatar = socialComments[j].querySelector('img');
      commentAvatar.src = photoObjects[i].comments[j].avatar;
      commentAvatar.alt = photoObjects[i].comments[j].name;
      const commentMessage = socialComments[j].querySelector('.social__text');
      commentMessage.textContent = photoObjects[i].comments[j].message;
    }
  });
}
const cancelButton = document.querySelector('#picture-cancel');
cancelButton.addEventListener('click', () => {
  bodyTag.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bodyTag.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  }
});

