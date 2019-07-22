//const config = require('./config/config.js')
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

// user : process.env.DBUser,
// password : process.env.DBPassword,

 const postgresDB = knex({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl: true
    }
  });

 postgresDB.select('*').from('logging').then(data => console.log(data));

const searchfield = require('./controllers/searchfield.js');

const database = {
    searchfield: 'blank',
}

app.use(bodyparser.json());
app.use(cors());


app.post('/searchfield', (req,res) => {
    console.log(req.body)
    const data = req.body.searchField
    postgresDB('logging').insert({
        search: data
    })
    .then( () => res.json(`here is the ${data}`))
    console.log(`here is the ${data}`)
    })
app.get('/', (req,res) => res.send('this is working'))

app.listen( process.env.PORT || 3001, () => console.log(`app is running on port ${process.env.PORT} or 3001`))
