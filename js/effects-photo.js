const effectLevelSliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview');
const inputRadioElements = document.querySelectorAll('[type="radio"]');

const EFFECTS_CLASSES = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat'
];

const CSS_EFFECTS = [
  'none',
  'grayscale',
  'sepia',
  'invert',
  'blur',
  'brightness'
];

const EFFECTS_UNITS = ['','','','%','px',''];
const EFFECTS_MIN_RANGES = [0,0, 0, 0, 0, 1];
const EFFECTS_MAX_RANGES = [0,1, 1, 100, 3, 3];
const EFFECTS_STEP_VALUES = [0,0.1, 0.1, 1, 0.1, 0.1];
const EFFECTS_START_VALUES = [0,1, 1, 100, 3, 3];

const writeEffectsInCSS = function (numberInMassive) {
  imgUploadPreviewElement.style=`-webkit-filter: ${CSS_EFFECTS[numberInMassive]}(${effectValue.value}${EFFECTS_UNITS[numberInMassive]})`;
  imgUploadPreviewElement.style=`filter: ${CSS_EFFECTS[numberInMassive]}(${effectValue.value}${EFFECTS_UNITS[numberInMassive]})`;
};

let effectNumber = 1;
effectLevelSliderElement.classList.add('hidden');
effectValue.value = 1;

noUiSlider.create(effectLevelSliderElement, {
  range: {
    min: EFFECTS_MIN_RANGES[effectNumber],
    max: EFFECTS_MAX_RANGES[effectNumber],
  },
  start: EFFECTS_MAX_RANGES[effectNumber],
  step: EFFECTS_START_VALUES[effectNumber],
});

for (let i=0; i<inputRadioElements.length; i++) {
  inputRadioElements[i].addEventListener('change' , () => {
    for (let j=0; j<inputRadioElements.length; j++) {
      imgUploadPreviewElement.classList.remove(EFFECTS_CLASSES[j]);
    }
    if (inputRadioElements[i].checked) {
      effectNumber = i;
      imgUploadPreviewElement.classList.add(EFFECTS_CLASSES[i]);
    }

    if (inputRadioElements[0].checked) {
      effectLevelSliderElement.classList.add('hidden');
    } else {
      effectLevelSliderElement.classList.remove('hidden');
    }

    writeEffectsInCSS(effectNumber);

    effectLevelSliderElement.noUiSlider.updateOptions({
      range: {
        min: EFFECTS_MIN_RANGES[effectNumber],
        max: EFFECTS_MAX_RANGES[effectNumber],
      },
      start: EFFECTS_START_VALUES[effectNumber],
      step: EFFECTS_STEP_VALUES[effectNumber],
    });
  });
}

effectLevelSliderElement.noUiSlider.on('update', () => {
  effectValue.value = effectLevelSliderElement.noUiSlider.get();
  writeEffectsInCSS(effectNumber);
});
