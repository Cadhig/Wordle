

// Variables reused between functions
let guessArray = []
let currentRow = 0
const rowArray = ['#game-row-1', '#game-row-2', '#game-row-3', '#game-row-4', '#game-row-5', '#game-row-6']
let displayRow = document.querySelector(rowArray[currentRow])
// will push clicked keys to an array
function keyboardClick(el) {
    if (guessArray.length > 4) {
        return
    }
    guessArray.push(el)
    displayInput()
}

// upon clicking delete, will pop most recent array item and remove letter from screen
function deleteKey() {
    guessArray.pop()
    displayRow.children[guessArray.length].innerHTML = null
    displayInput()
}

// will append letters selected to screen
function displayInput() {
    for (let i = 0; i < guessArray.length; i++) {
        const currentBox = displayRow.children[i]
        currentBox.innerHTML = null
        const displayLetter = document.createElement('p')
        displayLetter.textContent = guessArray[i].toUpperCase()
        displayLetter.setAttribute('class', 'displayLetter md:text-[60px] md:w-[80px] md:h-[80px] w-12 h-12 font-mono flex flex-col justify-center')
        currentBox.appendChild(displayLetter)
    }

}

// will submit users guess on enter button click
async function submitGuess() {
    const stringifiedArray = guessArray.join("")
    // will make sure all boxes are filled out
    if (stringifiedArray === null) {
        return
    }
    if (guessArray > 5) {
        return
    }
    // fetching real word from backend
    const response = await fetch(`${backend}/api/guess`, {
        method: "post",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            guess: stringifiedArray
        })

    }
    )
    const parsedResponse = await response.json()
    // calling function on submit
    checkGuess()
}

// checks the validity and accuracy of guess
async function checkGuess() {
    const stringifiedArray = guessArray.join("")
    // fetching real word from backend
    const response = await fetch(`${backend}/api/guess`, {
        method: "post",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            guess: stringifiedArray
        })

    }
    )
    const parsedResponse = await response.json()
    // fetching dictionary API to check validity of guessed words
    const responseDictionary = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${stringifiedArray}`)
    const parsedDictionary = await responseDictionary.json()

    const winMsg = document.getElementById('winDisplay')
    // checks validity of guess
    if (parsedDictionary.title === 'No Definitions Found') {
        return winMsg.textContent = "NOT A REAL WORD!"
    }

    /* checks users guess against the real word, applies colored boxes
     to letters in correct positions, and if they are in word */
    for (let i = 0; i < parsedResponse.length; i++) {
        let currentIndex = parsedResponse[i]
        const currentBox = displayRow.children[i]
        if (currentIndex.isLetterInWord !== currentIndex.isLetterInPosition) {
            currentBox.setAttribute('class', 'bg-amber-400 md:w-[80px] md:h-[80px] w-12 h-12 rounded-md')
        }
        if (currentIndex.isLetterInWord === true && currentIndex.isLetterInPosition === true) {
            currentBox.setAttribute('class', 'bg-green-600 md:w-[80px] md:h-[80px] w-12 h-12 rounded-md')
        }

    }
    // win/loss deciding
    const win = (currentValue) => currentValue.isLetterInPosition === true
    if (currentRow === 6) {
        winMsg.textContent = "YOU LOSE!"
    }
    if (parsedResponse.every(win)) {
        winMsg.textContent = "YOU WIN!"
    }

    /* once an answer is successfully submitted, guess array empties &
    game takes user to the next row */

    guessArray = []
    currentRow++
    displayRow = document.querySelector(rowArray[currentRow])

}