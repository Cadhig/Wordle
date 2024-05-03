const express = require('express')
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

app.listen(port, () => {
    console.log(`Front end listening on ${port}`)
})