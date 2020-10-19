const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.post('/soap', function (req, res) {
    res.send('Tu jest tekst soap')
})

app.post('/rest', function (req, res) {
    res.send('Tu jest tekst rest')
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})