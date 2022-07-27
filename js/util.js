const ALERT_SHOW_TIME = 5000;

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

function checkStringLength (string, length) {
  return string.length <= length;
}

function isKeydownEscape(evt) {
  return evt.key === 'Escape';
}

function isTrue(value) {
  return value === true;
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomNumber};
export {checkStringLength};
export {isKeydownEscape};
export {isTrue};
export {showAlert};
