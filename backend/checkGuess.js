const getRandomWord = require('./randomWord.js')

function checkGuess(realWord, userGuess) {
    if (realWord !== userGuess) {
        return false
    }
    return true

}

function checkLetters(realWord, userGuess) {
    const userCharacters = userGuess.split("")
    const realCharacters = realWord.split("")

    for (let i = 0; i < 5; i++) {
        if (userCharacters[i] !== realCharacters[i]) {
            return false
        }
    }
    return true
}

module.exports = checkLetters