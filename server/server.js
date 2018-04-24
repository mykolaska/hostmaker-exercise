const express = require('express')
const app = express()
const exerciseData = require('./data.json')

app.get('/api/v1/owners', (req, res) => res.send(exerciseData))

app.listen(3001, () => console.log('Hostmaker exercise Index listening on port 3001!'))
