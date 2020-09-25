
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs')
const fetch = require("node-fetch");

const signup = require('./controllers/signup.js');
const login = require('./controllers/login.js');
const hikingproject = require('./controllers/hikingproject.js');


 const postgresDB = knex({
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    }
  });

 postgresDB.select('*').from('logging').then(data => console.log(data));

const searchfield = require('./controllers/searchfield.js');

app.use(bodyparser.json());
app.use(cors());

app.post('/signup', (req,res) => { signup.handleSignup(req, res, postgresDB, bcrypt ) } )
app.post('/login', (req,res) => { login.handleLogin(req, res, postgresDB, bcrypt ) } )

app.post('/searchfield', (req,res) => {
    console.log(req.body)
    const data = req.body.searchField
    postgresDB('logging').insert({
        search: data
    })
    .then( () => res.json(`here is the ${data}`))
    console.log(`here is the ${data}`)
    })

app.post('/hikingproject', (req, res) => { hikingproject.handleHikingProject(req, res ) } )

app.get('/', (req,res) => res.send('this is working'))

app.listen( process.env.PORT || 3001, () => console.log(`app is running on port ${process.env.PORT} or 3001`))

