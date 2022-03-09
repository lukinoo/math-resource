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
