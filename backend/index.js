require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const getRandomWord = require('./randomWord.js')
const checkGuess = require('./checkGuess.js')
const checkLetters = require('./checkGuess.js')
const cors = require('cors')
let retrievedWord = null

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.get('/health', (req, res) => {
    return res.send('OK')
})

app.get('/api/guess', async (req, res) => {
    const enteredPassword = req.headers.password
    if (enteredPassword !== process.env.PASSWORD) {
        return res.status(401).send("Unauthorized")

    }
    if (retrievedWord === null) {
        retrievedWord = await getRandomWord()
    }
    return res.send(retrievedWord)
})

app.put('/api/guess', async (req, res) => {
    retrievedWord = await getRandomWord()
    return res.send(retrievedWord)
})

app.post('/api/guess', async (req, res) => {
    if (retrievedWord === null) {
        retrievedWord = await getRandomWord()

    }
    let userGuess = req.body.guess
    console.log(userGuess)
    if (userGuess.split("").length !== 5) {
        return res.send({
            "error": "NOT THE RIGHT LENGTH"
        })
    }
    const checkGuessResult = checkLetters(retrievedWord, userGuess)
    return res.send(checkGuessResult)
})

app.listen(port, () => {
    console.log(`Back end listening on ${port}`)
})
