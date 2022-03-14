const express = require('express');
const app = express();
const axios = require('axios').default;

app.get('/users', (req, res) => {
  axios
    .get('https://randomuser.me/api/?results=10')
    .then((item) => res.json(item.data.results));
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
