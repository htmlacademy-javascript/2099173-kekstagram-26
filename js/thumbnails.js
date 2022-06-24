import { creeatePhotos} from './generate-photos.js';

const picturesTitle = document.querySelector('.pictures__title');
picturesTitle.classList.remove('visually-hidden');

const picturesContainer = document.querySelector('.pictures');

const picture = document.querySelector('#picture').content;
const fragment = document.createDocumentFragment();
const photoObjects = creeatePhotos();

for (let i=0; i<25; i++) {
  const newPicture = picture.cloneNode(true);
  const pictureImg = newPicture.querySelector('.picture__img');
  pictureImg.src = photoObjects[i].urlAdress;
  const pictureComments = newPicture.querySelector('.picture__comments');
  pictureComments.textContent = photoObjects[i].likes;
  const pictureLikes = newPicture.querySelector('.picture__likes');
  pictureLikes.textContent = photoObjects[i].comments.length;

  fragment.append(newPicture);
}

picturesContainer.append(fragment);
