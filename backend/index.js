const express = require('express')
const app = express()
const port = 3000
const getRandomWord = require('./randomWord.js')
const checkGuess = require('./checkGuess.js')
let retrievedWord = null

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/health', (req, res) => {
    res.send('OK')
})

app.get('/api/guess', async (req, res) => {
    if (retrievedWord === null) {
        retrievedWord = await getRandomWord()
    }
    res.send(retrievedWord)
})

app.put('/api/guess', async (req, res) => {
    retrievedWord = await getRandomWord()
    res.send(retrievedWord)
})

app.post('/api/guess', (req, res) => {
    let userGuess = req.body
    console.log(userGuess)
    const checkGuessResult = checkGuess(retrievedWord, userGuess)
    if (checkGuessResult == false) {
        res.send('NOT OK')
    } else {
        res.send('OK')
    }
})

app.listen(port, () => {
    console.log(`Back end listening on ${port}`)
})
