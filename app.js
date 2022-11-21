const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const routes = require('./routes/index.routes');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

const db = require("./models");
db.sequelize.sync()
    .then(() => {
      console.log("Models synchronized with DB!");
    }).catch(err => {
  console.error(err);
});

// add seed here in order to have some data (reset and add new)


app.listen(8000, '0.0.0.0', function () {
  console.log('App listening on port 5000! Go to http://localhost:8000/')
});

module.exports = app;