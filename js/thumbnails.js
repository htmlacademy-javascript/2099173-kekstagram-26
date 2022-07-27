const picturesTitleElement = document.querySelector('.pictures__title');
picturesTitleElement.classList.remove('visually-hidden');
const pictureElement = document.querySelector('#picture').content;


const picturesContainerElement = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function showThumbnails (photosForThumbnails) {
  for (let i=0; i<photosForThumbnails.length; i++) {
    const newPicture = pictureElement.cloneNode(true);
    const pictureImgElement = newPicture.querySelector('.picture__img');
    const pictureCommentsElement = newPicture.querySelector('.picture__comments');
    const pictureLikesElement = newPicture.querySelector('.picture__likes');
    pictureImgElement.src = photosForThumbnails[i].url;
    pictureCommentsElement.textContent = photosForThumbnails[i].comments.length;
    pictureLikesElement.textContent = photosForThumbnails[i].likes;
    fragment.append(newPicture);
  }

  picturesContainerElement.append(fragment);
}

export {showThumbnails};
