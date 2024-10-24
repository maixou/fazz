const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.menu-aulas');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const links = document.querySelectorAll('.nav a');

links.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

function scrollToSection() {
  // scroll to section
}

const video = document.querySelector('iframe');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
});

const title = document.querySelector('.title');
const dropdown = document.querySelector('.dropdown');

title.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});
