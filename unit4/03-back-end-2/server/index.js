const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/houses', () => {});

app.post('/api/houses', () => {});

app.put('/api/houses/:id', () => {});

app.delete('/api/houses/:id', () => {});

const PORT = 4004;
app.listen(port, () => {console.log(`Server is running on http://localhost:${PORT}`)});