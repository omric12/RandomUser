const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

/*
 * process.env.PORT while hosted on Heroku
 * 5000 while hosted locally
 */
const PORT = process.env.PORT || 5000;

app.get('/users', (req, res) => {
  console.log('get req ');
  axios
    .get('https://randomuser.me/api/?results=10')
    .then((response) => {
      res.send(response.data.results);
    })
    .catch((e) => console.log('ERROR BE: ', e));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
