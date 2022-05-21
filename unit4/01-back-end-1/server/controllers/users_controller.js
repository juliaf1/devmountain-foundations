const getUsers = (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
};

module.exports = {
  getUsers
}