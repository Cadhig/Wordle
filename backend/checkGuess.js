const getRandomWord = require('./randomWord.js')

function checkGuess(realWord, userGuess) {
    if (realWord !== userGuess) {
        return false
    }
    return true

}

function checkLetters(realWord, userGuess) {
    const userCharacters = userGuess
    const realCharacters = realWord.toLowerCase().split("")
    let letterArray = []
    for (let i = 0; i < userCharacters; i++) {
        const currentLetter = userCharacters[i]
        const isLetterInWord = realCharacters.includes(currentLetter)
        const isLetterInPosition = userCharacters.indexOf(currentLetter) == realCharacters.indexOf(currentLetter)
        const letterCheck = {
            isLetterInWord,
            isLetterInPosition,
        }
        letterArray.push(letterCheck)
    }
    return letterArray
}
module.exports = checkLetters