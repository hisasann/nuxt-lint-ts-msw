const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const port = 4000;

app.get('/check', (req, res) => {
  console.log('get parameter server', req.query);
  res.send('get parameter client: ' + req.query.p);
});

app.get('/user/:userId', function (req, res, next) {
  console.log('get parameter server', req.params);
  if (req.params.userId !== 'hisasann') {
    res.status(404);
  }
  res.send('get parameter client: ' + req.params.userId);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
