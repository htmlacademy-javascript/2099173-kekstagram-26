// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getNumberFrom (minValue, maxValue) {
  const providedNumbers = [];
  let increaser = 0;
  if (minValue >= maxValue) {
    return 'Ошибка: первое число должно быть меньше второго!';
  } else if (minValue % 1 !==0 || maxValue % 1 !==0) {
    return 'Ошибка: оба числа должны быть целыми!';
  } else if (minValue <0 || maxValue < 0) {
    return 'Ошибка: оба числа должны быть положительными!';
  } else {
    for (let i = 0; i <= maxValue - minValue; i++) {
      providedNumbers[i] = minValue + increaser;
      increaser++;
    }
  }
  return providedNumbers[Math.floor(Math.random() * providedNumbers.length)];
}
getNumberFrom();


// Функция для проверки максимальной длины строки.

function limitString (string, maxLength) {
  return (string.length <= maxLength);
}
limitString();
