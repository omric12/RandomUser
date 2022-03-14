const path = require('path');

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

/*
 * process.env.PORT while hosted on Heroku
 * 5000 while hosted locally
 */
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../client/', 'build');
app.use(express.static(publicPath));

app.get('/users', (req, res) => {
  axios
    .get('https://randomuser.me/api/?results=10')
    .then((response) => {
      res.send(response.data.results);
    })
    .catch((e) => console.log('ERROR BE: ', e));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
