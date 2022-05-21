const express = require('express');
const cors = require('cors');
const projectsController = require('./controllers/projects_controller');
const { randomProject, social } = projectsController;

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/random-project', randomProject);
app.get('/social', social);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})