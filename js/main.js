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

getRandomNumber();

// Функция для проверки максимальной длины строки.

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('word', 3);

//Создаем 25 объектов по ТЗ из раздела 4.15
//Указываем необходимое количество фото-объектов
const photoObjectsNumber = 25;

//Создаем массив значеий id фото-объектов.
const ID_VALUES = [];
for (let i=0; i<photoObjectsNumber; i++) {
  ID_VALUES[i] = i+1;
}

//Функция генерации одного уникального значения ID фото-объекта
function getPhotoID() {
  const photoID = ID_VALUES[0];
  ID_VALUES.shift();
  return photoID;
}

//Создаем массив значений url-адресов фото-объектов
const URL_VALUES = [];
for (let i=0; i<photoObjectsNumber; i++) {
  URL_VALUES[i] = `photos/${i+1}.jpg`;
}

//Функция генерации одного уникального значения url-адреса фото-объекта
function getPhotoUrlAdress() {
  const photoUrl = URL_VALUES[0];
  URL_VALUES.shift();
  return photoUrl;
}

//Создаем массив описаний фотографий

const DESCRIPTION_VALUES = [
  'На море',
  'В парке',
  'В лесу',
  'В поле',
  'На озере',
  'На речке',
  'На рыбалке',
  'На пляже',
  'В деревне',
  'У бабушки',
  'На кладбище',
  'На заброшенном заводе',
  'С сестрой',
  'С братом',
  'С папой',
  'С мамой',
  'С одноклассниками',
  'С одногруппниками из колледжа',
  'С университетскими',
  'С сослуживцами',
  'С коллегами по работе',
  'С возлюбленной',
  'С сыном',
  'В горах',
  'На работе'
];

//Функция генерации одного описания фотографии
function getDescription() {
  const photoDescriptionNumber = getRandomNumber(0, DESCRIPTION_VALUES.length-1);
  const photoDescription = DESCRIPTION_VALUES[photoDescriptionNumber];
  return photoDescription;
}

//Функция генерации определенного количства лайков от 15 до 200
function getLikes() {
  const likesNumber = getRandomNumber(15, 200);
  return likesNumber;
}

//Работа на комментами:
//Создаем массив значений Id коммента
const COMMENTS_ID_VALUES = [];
for (let i=0; i<1000; i++) {
  COMMENTS_ID_VALUES[i] = i+1;
}

//Функция генерации одного уникального значения ID для коммента
function getCommentID() {
  const commentIdNumber = getRandomNumber(1, 1000);
  const commentID = COMMENTS_ID_VALUES[commentIdNumber];
  COMMENTS_ID_VALUES[commentIdNumber] += 1000;
  return commentID;
}

//Создаем массив значений аватаров
const AVATAR_URL_VALUES = [];
for (let i=0; i<6; i++) {
  AVATAR_URL_VALUES[i] = `img/avatar-${i+1}.jpg`;
}

//Функция генерации одного значения аватара для коммента
function getAvatarUrl() {
  const avatarUrlNumber = getRandomNumber(1, AVATAR_URL_VALUES.length-1);
  const avatarUrl = AVATAR_URL_VALUES[avatarUrlNumber];
  return avatarUrl;
}

//Создаем массив значений сообщений коммента
const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//Функция генерации одного сообщения коммента...
function getSingleMessage() {
  const messageNumber = getRandomNumber(1, COMMENTS_MESSAGES.length-1);
  const commentMessage = COMMENTS_MESSAGES[messageNumber];
  return commentMessage;
}

//...или иногда двух
function getCompleteMessage() {
  let completeMessage;
  if (getRandomNumber(1, 2) === 2) {
    completeMessage = `${getSingleMessage()  } ${  getSingleMessage()}`;
    return completeMessage;
  }
  completeMessage = getSingleMessage();
  return completeMessage;
}

//Создаем массив значений имен
const SOME_NAMES = [
  'Александр',
  'Максим',
  'Михаил',
  'Марк',
  'Иван',
  'Артем',
  'Лев',
  'Дмитрий',
  'Матвей',
  'Даниил',
  'София',
  'Анна',
  'Мария',
  'Алиса',
  'Ева',
  'Виктория',
  'Полина',
  'Варвара',
  'Александра',
  'Анастасия'
];

//Функция генерации одного имени комментатора
function getName() {
  const nameNumber = getRandomNumber(1, SOME_NAMES.length-1);
  const correctName = SOME_NAMES[nameNumber];
  return correctName;
}

//Конструктор комментов
function SingleComment (commentId, avatar, message, commenterName) {
  // eslint-disable-next-line no-unused-expressions
  this.commentId = commentId,
  this.avatar = avatar,
  this.message = message,
  this.commenterName = commenterName;
}

//Запустить в цикл выполнение функции для создания и наполнения массива рандомных комментов
function addComments () {
  const COMMENTS = [];
  for (let i=0; i<getRandomNumber(1,10); i++) {
    COMMENTS[i] = new SingleComment(getCommentID(), getAvatarUrl(), getCompleteMessage(), getName());
  }
  return COMMENTS;
}

//Конструктор фото-объекта
function SinglePhoto (photoId, urlAdress, description, likes, comments) {
  // eslint-disable-next-line no-unused-expressions
  this.photoId = photoId,
  this.urlAdress = urlAdress,
  this.description = description,
  this.likes = likes;
  this.comments = comments;
}

//массива фото-объектов

const photoObjects = [];
for (let j=0; j<photoObjectsNumber; j++) {
  photoObjects[j] = new SinglePhoto(getPhotoID(), getPhotoUrlAdress(), getDescription(), getLikes(), addComments());
}
