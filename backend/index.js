const express = require('express')
const app = express()
const port = 3000
const getRandomWord = require('./randomWord.js')
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/health', (req, res) => {
    res.send('OK')
})

app.get('/api/guess', async (req, res) => {
    const retrievedWord = await getRandomWord()
    res.send(retrievedWord)
})

app.post('/api/guess', (req, res) => {
    const correctWord = 'SOGGY'
    const requestBody = req.body
    if (Object.keys(requestBody).length === 0) {
        return res.send('NOT OK');
    }
    return res.send('OK');
})

app.listen(port, () => {
    console.log(`Back end listening on ${port}`)
})
