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
    price: +price,
    imageURL,
  });
  id++;
  res.status(201).send(db);
};

const updateHouse = (req, res) => {
  const house = findHouse(req.params.id);
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
  const houseIndex = findHouseIndex(req.params.id);
  db.splice(houseIndex, 1);
  res.status(200).send(db);
};

const findHouseIndex = id => {
  return db.findIndex(house => house.id == id);
};

const findHouse = id => {
  return db[findHouseIndex(id)];
};

module.exports = {
  getHouses,
  createHouse,
  updateHouse,
  deleteHouse,
};