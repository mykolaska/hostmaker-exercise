const express = require('express')
const app = express()
var cors = require('cors')
const exerciseData = require('./data.json')

var whitelist = ['http://localhost:3000', 'http://localhost:3001']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/api/v1/owners', cors(corsOptions), (req, res) => res.send(exerciseData))

app.listen(3001, () => console.log('Hostmaker exercise listening on port 3001!'))
