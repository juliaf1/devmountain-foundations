const API_BASE_URL = 'http://localhost:4000/api/';

const complimentBtn = document.getElementById('complimentButton');
const fortuneBtn = document.getElementById('fortuneButton');
const drinkBtn = document.getElementById('drinkBotButton');

const sweetAlertContainer = document.querySelector('.sweet-alert-container');
const sweetAlertText = sweetAlertContainer.querySelector('.alert-text');
const sweetAlertIcon = sweetAlertContainer.querySelector('.alert-icon');

const toDoInput = document.querySelector('#toDoInput');
const toDoForm = document.querySelector('form');
const toDoBtn = document.querySelector('#toDoButton');
const toDoListContainer = document.querySelector('#toDoListContainer');

const handleButton = (event) => {
    const url = API_BASE_URL + event.target.name;
    axios.get(url).then(({ data }) => alert(data));
};

const handleDrinkBotButton = () => {
    const url = API_BASE_URL + 'drink_allowed';
    axios.get(url).then(({ data }) => displaySweetAlert(data.emoji, data.text));
};

const getToDoList = () => {
    const url = API_BASE_URL + 'todo';
    axios.get(url).then(({ data }) => displayToDoList(data));
 };

const displayToDoList = list => {
    toDoListContainer.innerHTML = '';
    list.forEach(item => {
        const { id, title, completed } = item;
        const toDoItem = document.createElement('div');
        toDoItem.classList.add('to-do-item');
        toDoItem.id = id;
        toDoItem.innerHTML = `<span class="to-do-check">${completed ? '✔️' : ''}</span>
        <p class="to-do-text">${title}</p>`;
        toDoListContainer.appendChild(toDoItem);
        toDoItem.querySelector('.to-do-check').addEventListener('click', handleCheckButton);
    });
};

const addToDoListItem = event => {
    event.preventDefault();
    const url = API_BASE_URL + 'todo'
    const body = { title: toDoInput.value };
    axios.post(url, body).then(({ data }) =>  displayToDoList(data));
    toDoInput.value = '';
};

const handleCheckButton = event => {
    const itemId = +event.target.parentElement.id;
    axios.put(API_BASE_URL + `todo/${itemId}`)
        .then(res => {
            const { completed } = res.data;
            event.target.innerText = completed ? '✔️' : '';
        })
        .catch((err, res) => {
            const { icon, description } = err.response.data;
            displaySweetAlert(icon, description);
        });
};

const displaySweetAlert = (icon, text) => {
    sweetAlertContainer.classList.remove('d-none');
    sweetAlertText.innerText = text;
    sweetAlertIcon.innerText = icon;
    setTimeout(function() {
        sweetAlertContainer.classList.add('d-none');
    }, 1800);
};

complimentBtn.addEventListener('click', handleButton);
fortuneBtn.addEventListener('click', handleButton);
drinkBtn.addEventListener('click', handleDrinkBotButton);
toDoForm.addEventListener('submit', addToDoListItem);

getToDoList();