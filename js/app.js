const cardsWrapper = document.getElementById('cards-wrapper');
const dropdown = document.querySelectorAll('.dropdown');
const dropdownContent = document.querySelectorAll('.dropdown-content');
const childDropdown = document.querySelectorAll('.child-dropdown');
const childDropdownContent = document.querySelectorAll(
  '.child-dropdown-content'
);
const authForm = document.querySelector('#auth-form');
const passwordForm = document.querySelector('#pass-form');
const passFormRecoveryBtn = document.querySelector('#recovery');
const registrationBtnOnRecovery = document.querySelector(
  '#registration-on-recovery'
);
const emailForm = document.querySelector('#email-form');
const registerForm = document.querySelector('#register-form');
const authLinktoClick = document.querySelector('#auth-link');
const recoveryButton = document.querySelector('.recovery');
const registrationButton = document.querySelector('#registration-on-auth');
const registrationButtonOnEmail = document.querySelector(
  '#registration-on-email'
);

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let email = id('email'),
  enterBtn = id('enter'),
  emailFld = id('email'),
  passFld = id('pass'),
  password = id('pass'),
  firstName = id('first_name'),
  lastName = id('last_name'),
  region = id('region'),
  school = id('school'),
  grade = id('grade'),
  recoveryEmail = id('recovery_email'),
  recoveryPass = id('recovery_password'),
  repeatRecPass = id('repeat_pass'),
  registeringEmail = id('register_email'),
  newPassword = id('new_password'),
  repeatPassword = id('repeat_new_pass'),
  registrationBtn = id('registration-button'),
  successPage = id('successful-registration'),
  recoveryTab = id('successful-recovery-tab'),
  recoveryAgainBtn = id('send-to-recovery-again'),
  authContainer = id('auth-container'),
  successPassPage = id('successful-pass-change'),
  successIcon = classes('success-icon'),
  failureIcon = classes('failure-icon'),
  errorMessage = classes('email-msg'),
  myProfile = id('my-profile'),
  profileOptionTwo = id('profile-option-two');

const cards = [
  {
    id: 1,
    topicsByFilter: 'ხაზები',
    progress: '0 / 9',
    img: 'image content',
    topics: 'ხაზები',
    grade: 'I-IV',
    author: 'ნინო ადამია',
  },
  {
    id: 2,
    topicsByFilter: 'კუთხეები',
    progress: '0 / 9',
    img: 'image content',
    topics: 'კუთხეები',
    grade: 'I-IV',
    author: 'ნინო ადამია',
  },
  {
    id: 3,
    topicsByFilter: 'ფიგურები',
    progress: '0 / 9',
    img: 'image content',
    topics: 'ფიგურები',
    grade: 'I-IV',
    author: 'ნინო ადამია',
  },
  {
    id: 4,
    topicsByFilter: 'პითაგორას თეორემა',
    progress: '0 / 9',
    img: 'image content',
    topics: 'ხაზები',
    grade: 'I-IV',
    author: 'ნინო ადამია',
  },
  {
    id: 5,
    topicsByFilter: 'I-XII',
    progress: '0 / 9',
    img: 'image content',
    topics: 'ხაზები',
    grade: 'I-IV',
    author: 'ნინო ადამია',
  },
  {
    id: 6,
    topicsByFilter: 'I-XII',
    progress: '0 / 9',
    img: 'image content',
    topics: 'ხაზები',
    grade: 'I-IV',
    author: 'ნინო ადამია',
  },
  {
    id: 7,
    topicsByFilter: 'ნინო ადამია',
    progress: '0 / 9',
    img: 'image content',
    topics: 'ხაზები',
    grade: 'I-IV',
    author: 'ნინო ადამია',
  },
  {
    id: 8,
    topicsByFilter: 'ნინო ადამია',
    progress: '0 / 9',
    img: 'image content',
    topics: 'ხაზები',
    grade: 'I-IV',
    author: 'ნინო ადამია',
  },
  {
    id: 9,
    topicsByFilter: 'ნინო სიდამონიძე',
    progress: '0 / 9',
    img: 'image content',
    topics: 'ხაზები',
    grade: 'I-IV',
    author: 'ნინო ადამია',
  },
];

const cardsContainer = (obj) => {
  return `<div class="card" id=${obj.id}>
  <div class="top-content">
    <h3 class="topicByFilter">${obj.topicsByFilter}</h3>
    <p class="progress">${obj.progress}</p>
  </div>
  <div class="middle-content">
    <div class="card-image">${obj.img}</div>
  </div>
  <div class="bottom-content">
    <p class="topic">${obj.topics}</p>
    <p class="grade">${obj.grade}</p>
    <p class="author">${obj.author}</p>
  </div>
</div>`;
};

window.addEventListener('DOMContentLoaded', () => {
  cards.forEach((card) => (cardsWrapper.innerHTML += cardsContainer(card)));
});

// sort

// const dropdown = document.querySelectorAll('.dropdown');
// const dropdownContent = document.querySelectorAll('.dropdown-content');
// const childDropdown = document.querySelectorAll('.child-dropdown');
// const childDropdownContent = document.querySelectorAll('.child-dropdown-content');

window.addEventListener('load', () => {
  dropdown.forEach((item, index) => {
    item.addEventListener('click', () => {
      dropdownContent[index].classList.toggle('dropdown-active');
    });
  });

  childDropdown.forEach((item, index) => {
    item.addEventListener('click', () => {
      childDropdownContent[index].classList.toggle(
        'child-dropdown-content-active'
      );
    });
  });
});

const addClass = (element) => {
  element.classList.add('active');
};

const removeClass = (element) => {
  element.classList.remove('active');
};

const errorMsgAdd = (element) => {
  element.classList.add('error');
};

const errorMsgRemove = (element) => {
  element.classList.remove('error');
};

const successMsgAdd = (element) => {
  element.classList.add('success');
};

const successMsgRemove = (element) => {
  element.classList.remove('success');
};

let engine = (id, serial) => {
  if (id.value.trim() === '') {
    errorMsgAdd(id);
    errorMsgAdd(failureIcon[serial]);
    errorMsgAdd(errorMessage[serial]);
    successMsgRemove(id);
    successMsgRemove(successIcon[serial]);
  } else {
    errorMsgRemove(id);
    errorMsgRemove(failureIcon[serial]);
    errorMsgRemove(errorMessage[serial]);
    successMsgAdd(id);
    successMsgAdd(successIcon[serial]);
  }
};

registrationButton.addEventListener('click', () => {
  addClass(authForm);
  addClass(registerForm);
});

recoveryButton.addEventListener('click', () => {
  addClass(authForm);
  addClass(emailForm);
});

registrationButtonOnEmail.addEventListener('click', () => {
  addClass(registerForm);
  removeClass(emailForm);
});

passFormRecoveryBtn.addEventListener('click', () => {
  addClass(emailForm);
  removeClass(passwordForm);
});

registrationBtnOnRecovery.addEventListener('click', () => {
  addClass(registerForm);
  removeClass(passwordForm);
});

recoveryAgainBtn.addEventListener('click', () => {
  addClass(emailForm);
  removeClass(recoveryTab);
  removeClass(authContainer);
  errorMsgRemove(recoveryEmail);
  errorMsgRemove(failureIcon[4]);
  errorMsgRemove(errorMessage[4]);
});

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailFld.value.trim() !== '' && passFld.value.trim() !== '') {
    addClass(authForm);
    addClass(authContainer);
    addClass(myProfile);
  } else {
    engine(emailFld, 0);
    engine(passFld, 1);
  }
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let arrayOfInputs = [
    firstName,
    lastName,
    region,
    school,
    grade,
    registeringEmail,
    newPassword,
    repeatPassword,
  ];

  if (
    firstName.value.trim() !== '' &&
    lastName.value.trim() !== '' &&
    region.value.trim() !== '' &&
    school.value.trim() !== '' &&
    grade.value.trim() !== '' &&
    registeringEmail.value.trim() !== '' &&
    repeatPassword.value.trim() !== '' &&
    registeringEmail.value.trim() !== ''
  ) {
    addClass(authContainer);
    addClass(successPage);
    registerForm.reset();
  } else {
    engine(firstName, 5);
    engine(lastName, 6);
    engine(region, 7);
    engine(school, 8);
    engine(grade, 9);
    engine(registeringEmail, 10);
    engine(newPassword, 11);
    engine(repeatPassword, 12);
  }
  // arrayOfInputs.forEach((input) => {
  //   if (input.value.trim() !== '') {
  //     addClass(authContainer);
  //     addClass(successPage);
  //     registerForm.reset();
  //   } else {
  //     engine(firstName, 5);
  //     engine(lastName, 6);
  //     engine(region, 7);
  //     engine(school, 8);
  //     engine(grade, 9);
  //     engine(registeringEmail, 10);
  //     engine(newPassword, 11);
  //     engine(repeatPassword, 12);
  //   }
  // });
});

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (recoveryEmail.value.trim() !== '') {
    addClass(recoveryTab);
    addClass(authContainer);
    emailForm.reset();
  } else {
    engine(recoveryEmail, 4);
  }
});

passwordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (recoveryPass.value.trim() !== '' && repeatRecPass.value.trim() !== '') {
    addClass(authContainer);
    addClass(successPassPage);
    addClass(passwordForm);
    passwordForm.reset();
  } else {
    engine(recoveryPass, 2);
    engine(repeatRecPass, 3);
  }
});
