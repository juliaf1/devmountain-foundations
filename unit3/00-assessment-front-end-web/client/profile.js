// const { default: axios } = require("axios");

const baseUrl = 'http://localhost:3001';

const projImg = document.querySelector('.project-image');
const imgContainer = document.querySelector('.image-container');
const projTitle = document.querySelector('#project-title');
const projDesc = document.querySelector('#project-desc');
const projLink = document.querySelector('#project-link');
const projectControls = document.querySelector('.project-controls');
const tagsContainer = document.querySelector('.tags-container');

const showProjectControls = event => {
  projImg.style.opacity = '.5';
  projectControls.classList.remove('hidden');
};

const hideProjectControls = event => {
  projImg.style.opacity = '1';
  projectControls.classList.add('hidden');
};

hideProjectControls();
imgContainer.addEventListener('mouseenter', showProjectControls);
imgContainer.addEventListener('mouseleave', hideProjectControls);

const randomBtn = document.querySelector('.shuffle-button');

const getNewProject = event => {
  let projTags = document.querySelectorAll('.tag');

  axios.get(baseUrl + '/random-project').then(res => {
    let { title, link, image, description, tags } = res.data;
    projTitle.innerText = title;
    projDesc.innerText = description;
    projLink.href = link;
    projImg.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${image})`;
    projTags.forEach(tag => tag.remove());
    tags.forEach(tag => {
      let newTag = document.createElement("h5");
      newTag.classList.add('tag');
      newTag.innerText = tag.toUpperCase();
      tagsContainer.insertAdjacentElement('beforeend', newTag);
    });
  });
};

randomBtn.addEventListener('click', getNewProject);