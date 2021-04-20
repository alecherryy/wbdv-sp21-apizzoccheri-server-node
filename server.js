const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let port = process.env.PORT || 3000

mongoose.connect(
  'mongodb+srv://user:user@cluster0.sjzpg.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://wbdv-spring21-apizzo-react.herokuapp.com');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  next();
});

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(4000);