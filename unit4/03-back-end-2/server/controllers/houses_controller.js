const db = require('../db.json');
let id = 4;

const getHouses = (req, res) => {
  res.status(200).send(db);
};

const createHouse = (req, res) => {
  const { address, price, imageURL } = req.body;
  db.push({
    id,
    address,
    price,
    imageURL
  });
  id++;
  res.status(201).send(db);
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