const cors = require('cors')
const express = require('express')
const app = express();
const port = 8080;
app.set('port', port);
const ENV = process.env.ENV || "development";
const bodyParser = require("body-parser");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const path = require("path");
const bcrypt = require('bcrypt');

app.use(cors())
app.use(express.json());

app.get("/vehicles", (req, res, next) => {
  knex("modo_vehicles").then(result => {
    return res.send(result)
  }).catch(err => console.log(err))
})

app.post("/user/auth", (req, res, next) => {
  knex("modo_users").where({email: req.body.email}).then(result => {
    if(!result[0]){
      return res.send("We can't find that email address")
    }
    if(req.body.password === result[0].password){
      return res.send("Login accepted")
    }
    else {
      res.send("Incorrect password")
    }
  }).catch(err => console.log(err))
})

function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})