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
  const houseId = db.findIndex(house => house.id == req.params.id);
  const house = db[houseId];
  const { type } = req.body;
  if (type === 'minus') {
    house.price -= 10000;
  } else if (type === 'plus') {
    house.price += 10000;
  } else {
    res.status(400).send('Type must be plus or minus');
    return
  };
  res.status(200).send(db);
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