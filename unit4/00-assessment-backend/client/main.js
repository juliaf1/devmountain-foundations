const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const drinkBtn = document.getElementById("drinkBotButton");
const sweetAlertContainer = document.querySelector(".sweet-alert-container");
const sweetAlertText = sweetAlertContainer.querySelector("h1");

const API_BASE_URL = 'http://localhost:4000/api/';

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
            sweetAlertText.innerText = data;
            setTimeout(function() {
                sweetAlertContainer.classList.add('d-none');
            }, 1800);
    });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
drinkBtn.addEventListener('click', getDrinkBotAnswer);