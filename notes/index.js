const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
let id = 0
const notes = []

app.get('/notes', (req, res) => {
  res.status(200).json(notes)
})

app.post('/notes', (req, res) => {
  const { text } = req.body

  if(!text) {
    res.status(400).json({ message: 'Text not found' })
  }

  id++
  notes.push({ id, text })
  res.status(201).json({ id, text })
})

app.listen(3000, () => {
  console.log('Running "Notes", port 3000')
})
