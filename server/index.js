const express = require('express')
const ctrl = require('./controller.js')

const app = express()

app.use(express.json())


app.get('/api/chars', ctrl.getChars)
app.post('/api/chars', ctrl.addChars)
app.put('/api/chars/:id')


const port = 4000
app.listen(port, () => console.log(`listening on port ${port}`))