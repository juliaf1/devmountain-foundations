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
  message.textContent = 'Movie deleted';
  event.target.parentNode.remove();
};

const checkMovie = event => {
  event.target.classList.toggle('checked');
  if (event.target.classList.contains('checked')) {
    message.textContent = 'Movie watched';
  } else {
    message.textContent = 'Movie added back to watch list';
  };
};

form.addEventListener('submit', addMovie);