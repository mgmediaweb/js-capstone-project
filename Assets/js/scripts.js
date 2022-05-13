let listPrograms = '';
let listSpeakers = '';
const mobileMenuButtonOpen = document.querySelector('.mobile-menu-open');
const mobileMenuButtonClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('nav');

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
        <div class="speaker-image"><img src="./Assets/images/${speaker.image}" title="${speaker.name}" alt="${speaker.name}" /></div>
        <div class="speaker-info">
          <div class="speaker-head">
            <h4>${speaker.name}</h4>`;
            
      if(speaker.career) listSpeakers += `<p class="career">${speaker.career}</p>`;

      listSpeakers += `</div><p>${speaker.description}</p></div></div>`;
    });
    document.getElementById('list-speakers').innerHTML = listSpeakers;
  });

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