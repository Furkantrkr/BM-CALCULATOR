import fs from 'node:fs/promises';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

// GET endpoint -
app.get('/bmi', async (req, res) => {
  try {
    const fileContent = await fs.readFile('./data/user-data.json');
    const datas = JSON.parse(fileContent);
    res.status(200).json({ datas });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST endpoint -
app.put('/bmi', async (req, res) => {
  try {
    const newData = req.body.data;
    const fileContent = await fs.readFile('./data/user-data.json');
    const datas = JSON.parse(fileContent);

    datas.push(newData);

    await fs.writeFile('./data/user-data.json', JSON.stringify(datas));
    res.status(201).json({ message: 'New data added!', datas });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE endpoint -
app.delete('/bmi/:id', async (req, res) => {
  try {
    const dataId = parseInt(req.params.id);
    const fileContent = await fs.readFile('./data/user-data.json');
    let datas = JSON.parse(fileContent);

    datas = datas.filter((data) => +data.id !== dataId);

    await fs.writeFile('./data/user-data.json', JSON.stringify(datas));
    res.status(200).json({ message: 'Data deleted!', datas });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
