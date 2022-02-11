const cardsWrapper = document.getElementById('cards-wrapper');
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

cardsContainer = (obj) => {
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
