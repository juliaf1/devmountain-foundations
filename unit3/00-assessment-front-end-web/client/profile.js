const projectImg = document.querySelector('.project-image');
const projectControls = document.querySelector('.project-controls');

const showProjectControls = event => {
  projectControls.classList.remove('hidden');
};

const hideProjectControls = event => {
  projectControls.classList.add('hidden');
};

hideProjectControls();
projectImg.addEventListener('mouseenter', showProjectControls);
projectImg.addEventListener('mouseleave', hideProjectControls);