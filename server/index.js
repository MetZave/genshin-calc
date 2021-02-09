const express = require('express')
const { removeChars } = require('./controller.js')
const ctrl = require('./controller.js')

const app = express()

app.use(express.json())


app.get('/api/chars', ctrl.getChars)
app.get('/api/chars/shelf', ctrl.getShelfChars)
app.post('/api/chars/:name', ctrl.addChars)
app.put('/api/chars/:name')
app.delete('/api/chars/:name', ctrl.removeChars)


const port = 4000
app.listen(port, () => console.log(`listening on port ${port}`))