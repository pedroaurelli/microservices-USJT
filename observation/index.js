const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(bodyParser.json())
app.use(cors())
const observationWithNoteId = []

app.post('/notes/:id/observation', (req, res) => {
  const id = uuidv4()
  const { text } = req.body
  const observationNote = observationWithNoteId.filter(obsv => obsv == req.params.id)
  observationNote.push({ id: id, text })
  observationWithNoteId
})

app.get('/notes/:id/observation', (req, res) => {

})

app.listen(3001, () => {
  console.log('Observations running. Port 3001')
})
