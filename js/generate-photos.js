import { getRandomNumber } from './util.js';

//Создаем 25 объектов по ТЗ из раздела 4.15
//Указываем необходимое количество фото-объектов
const PHOTOS_COUNT = 25;
let idCounter = 1;
let urlCounter = 1;

//Создание одного фото:
function createSinglePhoto () {
  //Функция генерации одного уникального значения ID фото-объекта
  function getPhotoId() {
    const photoId = idCounter;
    idCounter++;
    return photoId;
  }

  //Функция генерации одного уникального значения url-адреса фото-объекта из массива значений
  function getPhotoUrlAdress() {
    const photoUrl = `photos/${urlCounter}.jpg`;
    urlCounter++;
    return photoUrl;
  }

  //Функция генерации одного описания фотографии из массива описаний
  function getDescription() {
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
    const photoDescriptionNumber = getRandomNumber(0, DESCRIPTION_VALUES.length-1);
    const photoDescription = DESCRIPTION_VALUES[photoDescriptionNumber];
    return photoDescription;
  }

  //Функция генерации определенного количства лайков от 15 до 200
  function getLikes() {
    const likesNumber = getRandomNumber(15, 200);
    return likesNumber;
  }

  //Создание одного комментария:
  function createSingleComment () {
    //Функция генерации одного уникального значения ID для коммента из значения
    const usedIdValues = [];
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

    //Функция генерации одного значения аватара для коммента из массива значений
    function getAvatarUrl() {
      const AVATAR_URL_VALUES = [];
      for (let i=0; i<6; i++) {
        AVATAR_URL_VALUES[i] = `img/avatar-${i+1}.jpg`;
      }
      const avatarUrlNumber = getRandomNumber(1, AVATAR_URL_VALUES.length-1);
      const avatarUrl = AVATAR_URL_VALUES[avatarUrlNumber];
      return avatarUrl;
    }

    //Функция генерации одного или иногда двух сообщений коммента из массива значений
    function getCompleteMessage() {
      const COMMENTS_MESSAGES = [
        'Всё отлично!',
        'В целом всё неплохо. Но не всё.',
        'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
        'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
      ];
      function getSingleMessage() {
        const messageNumber = getRandomNumber(1, COMMENTS_MESSAGES.length-1);
        const commentMessage = COMMENTS_MESSAGES[messageNumber];
        return commentMessage;
      }
      let completeMessage;
      if (getRandomNumber(1, 2) === 2) {
        completeMessage = `${getSingleMessage()  } ${  getSingleMessage()}`;
        return completeMessage;
      }
      completeMessage = getSingleMessage();
      return completeMessage;
    }

    //Функция генерации одного имени комментатора из массива значений
    function getName() {
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
      const nameNumber = getRandomNumber(1, SOME_NAMES.length-1);
      const correctName = SOME_NAMES[nameNumber];
      return correctName;
    }
    getName();

    //Создаем отдельный объект коммента
    const singleComment = {
      commentId: getCommentID(),
      avatarUrl: getAvatarUrl(),
      commentMessage: getCompleteMessage(),
      commenterName: getName()
    };
    return singleComment;

  }

  //Запустить в цикл выполнение функции для создания и наполнения массива рандомных комментов
  function addComments () {
    const COMMENTS = [];
    for (let i=0; i<getRandomNumber(1,10); i++) {
      COMMENTS[i] = createSingleComment ();
    }
    return COMMENTS;
  }

  //Создаем отдельный объект фото
  const singlePhoto = {
    photoId: getPhotoId(),
    photoUrlAddress: getPhotoUrlAdress(),
    description: getDescription(),
    likes: getLikes(),
    comments: addComments()
  };
  return singlePhoto;
}

//Запустить в цикл выполнение функции для создания и наполнения массива рандомных фото-объектов

const photoObjects = [];
for (let j=0; j<PHOTOS_COUNT; j++) {
  photoObjects[j] = createSinglePhoto();
}
