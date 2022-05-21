const getWeather = (req, res) => {
  const { temperature } = req.params;
  const phrase = `<h3>It was ${temperature} today</h3>`;
  res.status(200).send(phrase);
}

module.exports = {
  getWeather
}