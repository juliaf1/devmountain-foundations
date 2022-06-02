const { toDoList, fortunes, compliments, drinkBotMessages } = require('./db.json');
let id = 4;

const getCompliment = (req, res) => {
    res.status(200).send(compliments.sample());
};

const getFortune = (req, res) => {
    res.status(200).send(fortunes.sample());
};

const getDrinkBotAnswer = (req, res) => {
    let date = new Date();
    if (date.getDay() === 5 && date.getHours() > 18) {
        res.status(200).send(drinkBotMessages.fridayAfterHours);
    } else if (date.getDay() === 4) {
        res.status(200).send(drinkBotMessages.thursday);
    } else {
        res.status(200).send(drinkBotMessages.workingHours);
    };
};

const createToDoItem = (req, res) => {
    const { title } = req.body;
    toDoList.push({ id, title, completed: false });
    id++;
    res.status(201).send(toDoList);
};

const listToDoItems = (req, res) => {
    res.status(200).send(toDoList);
};

const updateToDoItem = (req, res) => {
    const item = findToDoItem(req.params.id);
    item.completed = !item.completed;
    res.status(200).send(item);
};

const findToDoItemIndex = id => {
    return toDoList.findIndex(item => item.id == id);
};
  
const findToDoItem = id => {
    return toDoList[findToDoItemIndex(id)];
};

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
};

module.exports = {
    getCompliment,
    getFortune,
    getDrinkBotAnswer,
    createToDoItem,
    listToDoItems,
    updateToDoItem,
}