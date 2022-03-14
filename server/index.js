const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json({ users: ['1', '2', '3'] });
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
