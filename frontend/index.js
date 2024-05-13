const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000
const path = require('path')
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/about', (req, res) => {
    res.send('Hello WORLLLLD');
})

app.get('/env.js', (req, res) => {
    const backend = process.env.BACKEND;
    res.type('text/javascript');
    res.send(`const backend = "${backend}";`);
});

app.listen(port, () => {
    console.log(`Front end listening on ${port}`)
})
