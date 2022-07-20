const scaleSmallerButtonElement = document.querySelector('.scale__control--smaller');
const scaleBiggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleValueInputElement = document.querySelector('.scale__control--value');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview');
let scaleValue = 100;
scaleValueInputElement.value = `${scaleValue}%`;
const scaleStep = 25;
let currentScale = 1;
imgUploadPreviewElement.style = `transform: scale(${currentScale})`;

scaleBiggerButtonElement.addEventListener('click', () => {
  scaleValue += scaleStep;
  if (scaleValue >= 100) {
    scaleValue = 100;
  }
  scaleValueInputElement.value = `${scaleValue}%`;
  if (currentScale >= 1) {
    currentScale = 1;
    imgUploadPreviewElement.style = 'transform: scale(1)';
  } else {
    imgUploadPreviewElement.style = `transform: scale(${currentScale += (scaleStep*0.01)})`;
  }
});

scaleSmallerButtonElement.addEventListener('click', () => {
  scaleValue -= scaleStep;
  if (scaleValue <= 25) {
    scaleValue = 25;
  }
  scaleValueInputElement.value = `${scaleValue}%`;
  if (currentScale <= 0.25) {
    currentScale = 0.25;
    imgUploadPreviewElement.style = 'transform: scale(0.25)';
  } else {
    imgUploadPreviewElement.style = `transform: scale(${currentScale -= (scaleStep*0.01)})`;
  }
});
