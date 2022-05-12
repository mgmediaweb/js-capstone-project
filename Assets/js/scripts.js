let listPrograms = '';
let listSpeakers = '';
const mobileMenuButtonOpen = document.querySelector('.mobile-menu-open');
const mobileMenuButtonClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('nav');

fetch('./Assets/json/program.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((program) => {
      listPrograms += `<img src="./Assets/images/${program.image}" alt="" /><p>${program.title}</p>`;
    });
    document.getElementById('speakers').innerHTML += listPrograms;
  });

fetch('./Assets/json/speakers.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((speaker) => {
      listSpeakers += `<img src="./Assets/images/${speaker.image}" alt="" /><p>${speaker.name}</p>`;
    });
    document.getElementById('speakers').innerHTML += listSpeakers;
  });


  mobileMenuButtonOpen.addEventListener('click', () => {
    mobileMenuButtonOpen.style.opacity = 0;
    mobileMenu.classList.remove('nav_initial');
    mobileMenu.classList.add('nav_active');
  });

  mobileMenuButtonClose.addEventListener('click', () => {
    mobileMenu.classList.remove('nav_active');
    mobileMenu.classList.add('nav_initial');
    mobileMenuButtonOpen.style.opacity = 1;    
  });