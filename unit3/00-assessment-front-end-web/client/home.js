const form = document.querySelector('form#contact');
const img = document.querySelector('img');

const handleSubmit = event => {
	event.preventDefault();
  alert('Thank you!');
}

const catCompliment = event => {
  alert('Pspspspsss, hi cat');
};

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', catCompliment);