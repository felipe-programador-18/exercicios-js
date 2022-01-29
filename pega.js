const express = require('express')
const app = express()
const axios = require('axios')

const Url = "https"

app.get('/', function (req, res) {
  res.send('Hello World')
})

axios
.get(Url)
.then(res =>
    console.log(res)
    )

app.listen(3000)