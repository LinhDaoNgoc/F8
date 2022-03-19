const express = require('express')
const app = express()
const port = 3000  //cổng chạy server

// app.get('/in', (req, res) => {
//     res.send('Chào Anh linh')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
app.post('/', function (req, res) {
    var data = '';
    if (req.xhr) {
        data += 'PoLy';
    }
    if (req.body.name) {
        data += 'Technic';
    }
    res.send(data);
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
});
