// Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomNumber (minValue, maxValue) {
  if (minValue <0 || maxValue < 0) {
    return 0;
  } else if (minValue >= maxValue) {
    if (minValue % 1 !==0 || maxValue % 1 !==0) {
      if ((Math.ceil(minValue) - Math.floor(maxValue)) === 1) {
        return 0;
      }
      return Math.floor(Math.random() * (Math.floor(minValue) - Math.ceil(maxValue))) + Math.ceil(maxValue);
    }
    return Math.round(Math.random() * (minValue-maxValue) + maxValue);
  }
  else if (minValue % 1 !==0 || maxValue % 1 !==0) {
    if ((Math.ceil(maxValue) - Math.floor(minValue)) === 1) {
      return 0;
    }
    return Math.round(Math.random() * (Math.floor(maxValue) - Math.ceil(minValue))) + Math.ceil(minValue);
  }
  return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

// Функция для проверки максимальной длины строки.
function checkStringLength (string, length) {
  return string.length <= length;
}

function isKeydownEscape(evt) {
  return evt.key === 'Escape';
}


export {getRandomNumber};
export {checkStringLength};
export {isKeydownEscape};
