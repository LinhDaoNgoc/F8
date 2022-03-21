const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000


app.use(morgan('combined'))

app.get('/', (req, res) => {
    // var a = 1;
    // var b = 2;

    // var c = a + b;
    // console.log(c);

    return res.send()
})

app.listen(port, () => {
    console.log(`Running  port ${port}`)
})