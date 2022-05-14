const inputField = document.querySelector('input');
const form = document.querySelector('form');
const list = document.querySelector('ul');
const message = document.querySelector('#message');

const addMovie = event => {
  event.preventDefault();
  let movie = document.createElement('li');

  let movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);
  
  let removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  movie.appendChild(removeButton);

  list.appendChild(movie);

  inputField.value = '';

  movieTitle.addEventListener('click', checkMovie);
  removeButton.addEventListener('click', removeMovie);
};

const removeMovie = event => {
  message.textContent = `${event.target.parentNode.firstChild.textContent} deleted`;
  event.target.parentNode.remove();
  revealMessage();
};

const checkMovie = event => {
  event.target.classList.toggle('checked');
  if (event.target.classList.contains('checked')) {
    message.textContent = `${event.target.textContent} watched`;
  } else {
    message.textContent = `${event.target.textContent} added back to watch list`;
  };
  revealMessage();
};

const revealMessage = () => {
  message.classList.remove('hide');
  setTimeout(() => { message.classList.add('hide') }, 1000);
};

form.addEventListener('submit', addMovie);