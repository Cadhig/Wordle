const backEnd = 'http://127.0.0.1:3000'

let guessArray = []
let currentRow = 0
const rowArray = ['#game-row-1', '#game-row-2', '#game-row-3', '#game-row-4', '#game-row-5', '#game-row-6']
let displayRow = document.querySelector(rowArray[currentRow])

function keyboardClick(el) {
    if (guessArray.length > 4) {
        return
    }
    guessArray.push(el)
    displayInput()
}

function deleteKey() {
    guessArray.pop()
    displayRow.children[guessArray.length].innerHTML = null
    displayInput()
}

function displayInput() {
    for (let i = 0; i < guessArray.length; i++) {
        const currentBox = displayRow.children[i]
        currentBox.innerHTML = null
        const displayLetter = document.createElement('p')
        displayLetter.textContent = guessArray[i]
        displayLetter.setAttribute('class', 'displayLetter')
        currentBox.appendChild(displayLetter)
        // displayRow.appendChild(displayLetter)
    }

}

async function submitGuess() {
    const stringifiedArray = guessArray.join("")
    console.log(stringifiedArray)
    if (stringifiedArray === null) {
        return
    }
    if (guessArray > 5) {
        return
    }
    const response = await fetch(`${backEnd}/api/guess`, {
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
    console.log(parsedResponse)
    checkGuess()
}


async function checkGuess() {
    const stringifiedArray = guessArray.join("")
    const response = await fetch(`${backEnd}/api/guess`, {
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
    for (let i = 0; i < parsedResponse.length; i++) {
        console.log(parsedResponse[i].isLetterInPosition)
        let currentIndex = parsedResponse[i]
        const currentBox = displayRow.children[i]
        if (parsedResponse[i].isLetterInWord !== parsedResponse[i].isLetterInPosition) {
            currentBox.setAttribute('class', 'yellowBox')
        }
        if (parsedResponse[i].isLetterInWord === true && parsedResponse[i].isLetterInPosition === true) {
            currentBox.setAttribute('class', 'greenBox')
        }

    }
    const win = (currentValue) => currentValue.isLetterInPosition === true
    const winMsg = document.getElementById('winDisplay')
    if (parsedResponse.every(win)) {
        winMsg.textContent = "YOU WIN!"
    }
    guessArray = []
    currentRow++
    if (currentRow > 6) {
        winMsg.textContent = "YOU LOSE"
    }
    displayRow = document.querySelector(rowArray[currentRow])

}