const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Hello Epxress')
}).listen(3000, () => {
    console.log('Server running at 3000 port')
})