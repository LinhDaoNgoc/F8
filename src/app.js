const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // var a = 1;
    // var b = 2;

    // var c = a + b;
    // console.log(c);

    return res.send('Chào bạn Linh nhé <3')
})

app.listen(port, () => {
    console.log(`Running  port ${port}`)
})