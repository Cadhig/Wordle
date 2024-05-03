
function checkGuess(realWord, userGuess) {
    if (realWord !== userGuess) {
        return false
    }
    return true
}

module.exports = checkGuess