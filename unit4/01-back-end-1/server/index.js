const express = require('express');
const cors = require('cors');
const { getUsers } = require('./controllers/users_controller');
const { getWeather } = require('./controllers/weather_controller');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/users", getUsers);

app.get("/weather/:temperature", getWeather);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is up on ${PORT}`));