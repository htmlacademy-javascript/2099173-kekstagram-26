import {creeatePhotos} from './generate-photos.js';

const picturesTitleElement = document.querySelector('.pictures__title');
picturesTitleElement.classList.remove('visually-hidden');
const pictureElement = document.querySelector('#picture').content;


const picturesContainerElement = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const photoObjects = creeatePhotos();

for (let i=0; i<photoObjects.length; i++) {
  const newPicture = pictureElement.cloneNode(true);
  const pictureImgElement = newPicture.querySelector('.picture__img');
  const pictureCommentsElement = newPicture.querySelector('.picture__comments');
  const pictureLikesElement = newPicture.querySelector('.picture__likes');
  pictureImgElement.src = photoObjects[i].urlAdress;
  pictureCommentsElement.textContent = photoObjects[i].comments.length;
  pictureLikesElement.textContent = photoObjects[i].likes;
  fragment.append(newPicture);
}

picturesContainerElement.append(fragment);

export {photoObjects};
