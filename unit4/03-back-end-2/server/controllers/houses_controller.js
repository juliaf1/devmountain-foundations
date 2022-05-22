const db = require('../db.json');
let upcomingId = 4;

const getHouses = (req, res) => {
  res.status(200).send(db);
};

const createHouse = (req, res) => {
  console.log('create house');
};

const updateHouse = (req, res) => {
  console.log('update house');
};

const deleteHouse = (req, res) => {
  console.log('delete house');
};

module.exports = {
  getHouses,
  createHouse,
  updateHouse,
  deleteHouse,
};