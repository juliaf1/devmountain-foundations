const API_BASE_URL = 'http://localhost:4000/api/';

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const drinkBtn = document.getElementById("drinkBotButton");

const sweetAlertContainer = document.querySelector(".sweet-alert-container");
const sweetAlertText = sweetAlertContainer.querySelector(".alert-text");
const sweetAlertIcon = sweetAlertContainer.querySelector(".alert-icon");

const toDoInput = document.querySelector("#toDoInput");
const toDoBtn = document.querySelector("#toDoButton");

const getCompliment = () => {
    axios.get(API_BASE_URL + 'compliment')
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(API_BASE_URL + 'fortune')
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getDrinkBotAnswer = () => {
    axios.get(API_BASE_URL + 'drink_allowed')
        .then(res => {
            const data = res.data;
            sweetAlertContainer.classList.remove('d-none');
            sweetAlertText.innerText = data.text;
            sweetAlertIcon.innerText = data.emoji;
            setTimeout(function() {
                sweetAlertContainer.classList.add('d-none');
            }, 1800);
    });
};

const addToDoList = () => {
    let item = toDoInput.value;
    axios.post(API_BASE_URL + 'to_do_list', {})
        .then(res => {
            const data = res.data;
            sweetAlertContainer.classList.remove('d-none');
            sweetAlertText.innerText = data.text;
            sweetAlertIcon.innerText = data.emoji;
            setTimeout(function() {
                sweetAlertContainer.classList.add('d-none');
            }, 1800);
    });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
drinkBtn.addEventListener('click', getDrinkBotAnswer);
toDoBtn.addEventListener('click', addToDoList);