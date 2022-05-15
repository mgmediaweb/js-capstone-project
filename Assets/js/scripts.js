let unique = true;
let countVal = null;
let counter = 0;
const delay = 50;
const wait = 5;
let listPrograms = '';
let listSpeakers = '';
const markets = [
  {
    market: 'bikes',
    quantity: 47,
  },
  {
    market: 'components',
    quantity: 52,
  },
  {
    market: 'nutrition',
    quantity: 38,
  },
  {
    market: 'electronic',
    quantity: 18,
  },
  {
    market: 'safety',
    quantity: 35,
  },
  {
    market: 'clothes',
    quantity: 41,
  },
  {
    market: 'indoor',
    quantity: 36,
  },
  {
    market: 'mechanical',
    quantity: 25,
  },
];
const mobileMenuButtonOpen = document.querySelector('.mobile-menu-open');
const mobileMenuButtonClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('nav');

const path = window.location.pathname;
const page = path.split('/').pop();

if ((page === '') || (page === 'index.html')) {
  fetch('./Assets/json/program.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((program) => {
        listPrograms += `<div class="program-box">
            <div class="program-info">
              <img src="./Assets/images/${program.image}" alt="${program.title}" />
              <h4>${program.title}</h4>
            </div>
            <p>${program.description}</p>
          </div>`;
      });
      document.getElementById('list-program').innerHTML = listPrograms;
    });

  fetch('./Assets/json/speakers.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((speaker) => {
        listSpeakers += `<div class="speaker-box">
          <div class="speaker-image">
            <img src="./Assets/images/${speaker.image}" title="${speaker.name}" alt="${speaker.name}" />
          </div>
          <div class="speaker-info">
            <div class="speaker-head">
              <h4>${speaker.name}</h4>`;

        if (speaker.career) listSpeakers += `<p class="career">${speaker.career}</p>`;

        listSpeakers += `</div><p>${speaker.description}</p></div></div>`;
      });
      document.getElementById('list-speakers').innerHTML = listSpeakers;
    });
}

mobileMenuButtonOpen.addEventListener('click', () => {
  mobileMenuButtonOpen.style.opacity = 0;
  mobileMenu.classList.remove('nav-initial');
  mobileMenu.classList.add('nav-active');
});

mobileMenuButtonClose.addEventListener('click', () => {
  mobileMenu.classList.remove('nav-active');
  mobileMenu.classList.add('nav-initial');
  mobileMenuButtonOpen.style.opacity = 1;
});

const showMsj = () => {
  counter += 1;

  if (( (counter - (wait * 0)) > 0 ) && (counter - (wait * 0)) <= markets[0].quantity) {
    document.getElementById(`qty-${markets[0].market}`).innerHTML = counter - (wait * 0);
  }

  if (( (counter - (wait * 1)) > 0 ) && (counter - (wait * 1)) <= markets[1].quantity) {
    document.getElementById(`qty-${markets[1].market}`).innerHTML = counter - (wait * 1);
  }

  if (( (counter - (wait * 2)) > 0 ) && (counter - (wait * 2)) <= markets[2].quantity) {
    document.getElementById(`qty-${markets[2].market}`).innerHTML = counter - (wait * 2);
  }
  
  if (( (counter - (wait * 3)) > 0 ) && (counter - (wait * 3)) <= markets[3].quantity) {
    document.getElementById(`qty-${markets[3].market}`).innerHTML = counter - (wait * 3);
  }
  
  if (( (counter - (wait * 4)) > 0 ) && (counter - (wait * 4)) <= markets[4].quantity) {
    document.getElementById(`qty-${markets[4].market}`).innerHTML = counter - (wait * 4);
  }

  if (( (counter - (wait * 5)) > 0 ) && (counter - (wait * 5)) <= markets[5].quantity) {
    document.getElementById(`qty-${markets[5].market}`).innerHTML = counter - (wait * 5);
  }

  if (( (counter - (wait * 6)) > 0 ) && (counter - (wait * 6)) <= markets[6].quantity) {
    document.getElementById(`qty-${markets[6].market}`).innerHTML = counter - (wait * 6);
  }

  if ((counter - (wait * 7)) > 0) {
    if((counter - (wait * 7)) <= markets[7].quantity) {
      document.getElementById(`qty-${markets[7].market}`).innerHTML = counter - (wait * 7);
    } else {
      clearInterval(countVal);
    }
  }
};

window.addEventListener('scroll', () => {
  const { scrollY } = this;
  let scrollbreak = 1600;

  if (window.screen.width > 768) scrollbreak = 500;

  if ((scrollY > scrollbreak) && (unique)) {
    unique = false;
    countVal = window.setInterval(showMsj, delay);
  }
});