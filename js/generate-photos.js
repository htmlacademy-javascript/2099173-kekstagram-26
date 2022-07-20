import {getRandomNumber} from './util.js';

const PHOTOS_COUNT = 25;

const DESCRIPTION_VALUES = [
  'На море',
  'По дороге на пляж',
  'Лазурь',
  'Секси фотографша',
  'Веселые Том Ямы',
  'Черный спорткар',
  'Клубничка',
  'Ягодный морс',
  'Самолет над пляжем',
  'Новая полка для обуви',
  'Достучаться до небес',
  'Ауди',
  'Настоящий поке',
  'Сушикот',
  'Новые тапки для дома',
  'В небесах',
  'Хор',
  'Ретро-автомобиль',
  'Тапочки с подсветкой',
  'Вечерний отель',
  'Вок',
  'Закат',
  'Крабик',
  'На концерте эминема',
  'Бегемоты и дефендер'
];

const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

const usedIdValues = [];

let counter = 0;

function getPhotoId() {
  const photoId = counter+1;
  return photoId;
}

function getPhotoUrlAdress() {
  const photoUrl = `photos/${counter+1}.jpg`;
  return photoUrl;
}

function getDescription() {
  const photoDescription = DESCRIPTION_VALUES[counter];
  return photoDescription;
}

function getLikes() {
  const likesNumber = getRandomNumber(15, 200);
  return likesNumber;
}

function getCommentID() {
  let commentId = getRandomNumber(1, 1000);
  if (usedIdValues.includes(commentId)) {
    while(usedIdValues.includes(commentId)) {
      commentId+=1000;
    }
  }
  usedIdValues.push(commentId);
  return commentId;
}

function getAvatarUrl() {
  const AVATAR_URL_VALUES = [];
  for (let i=0; i<6; i++) {
    AVATAR_URL_VALUES[i] = `img/avatar-${i+1}.svg`;
  }
  const avatarUrlNumber = getRandomNumber(0, AVATAR_URL_VALUES.length-1);
  const avatarUrl = AVATAR_URL_VALUES[avatarUrlNumber];
  return avatarUrl;
}

function getCompleteMessage() {
  let messageNumber = getRandomNumber(1, COMMENTS_MESSAGES.length-1);
  const firstPartOfMessage = COMMENTS_MESSAGES[messageNumber];
  COMMENTS_MESSAGES.splice(messageNumber, 1);
  messageNumber = getRandomNumber(1, COMMENTS_MESSAGES.length-1);
  const secondPartOfMessage = COMMENTS_MESSAGES[messageNumber];
  let completeMessage;
  if (getRandomNumber(1, 2) === 2) {
    completeMessage = `${firstPartOfMessage} ${secondPartOfMessage}`;
  } else {
    completeMessage = firstPartOfMessage;
  }
  COMMENTS_MESSAGES.push(firstPartOfMessage);
  return completeMessage;
}

function getName() {
  const nameNumber = getRandomNumber(1, SOME_NAMES.length)-1;
  const correctName = SOME_NAMES[nameNumber];
  return correctName;
}

function SingleComment (commentId, avatar, message, commenterName) {
  this.commentId = commentId;
  this.avatar = avatar;
  this.message = message;
  this.commenterName = commenterName;
}

function addComments () {
  const COMMENTS = [];
  for (let i=0; i<getRandomNumber(1,40); i++) {
    COMMENTS.push(new SingleComment(getCommentID(), getAvatarUrl(), getCompleteMessage(), getName()));
  }
  return COMMENTS;
}

function SinglePhoto (photoId, urlAdress, description, likes, comments) {
  this.photoId = photoId;
  this.urlAdress = urlAdress;
  this.description = description;
  this.likes = likes;
  this.comments = comments;
}

function creeatePhotos () {
  const photoObjects = [];
  counter = 0;
  for (let j=0; j<PHOTOS_COUNT; j++) {
    counter = j;
    photoObjects.push(new SinglePhoto(getPhotoId(), getPhotoUrlAdress(), getDescription(), getLikes(), addComments()));
  }
  return photoObjects;
}

export {creeatePhotos};
