const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./app/models');

// User.create({ name: 'Diguzim', email: 'diguzim@diguzim.com', password: '123456' });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.listen(3000);