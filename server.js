const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const searchfield = require('./controllers/searchfield.js');

const database = {
    searchfield: 'blank',
}

app.use(bodyparser.json());
app.use(cors());


app.post('/searchfield', (req,res) => {
    console.log(req.body)
    const data = req.body.searchField
    res.json(`here is the ${data}`)
    console.log(`here is the ${data}`)
    })
app.get('/', (req,res) => res.send('this is working'))

app.listen(3001, () => console.log('running on port 3001'))
