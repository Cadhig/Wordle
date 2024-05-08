const backEnd = 'http://127.0.0.1:3000'

let guessArray = []

function keyboardClick(el) {
    console.log(el)
    const displayRow = document.querySelector('#game-row-1')

    guessArray.push(el)
    if (guessArray.length > 5) {
        return
    }
    const displayLetter = document.createElement('p')
    displayLetter.setAttribute('class', 'displayLetter')
    displayRow.appendChild(displayLetter)
    displayLetter.textContent = el
    console.log(guessArray)
}

function deleteKey() {
    guessArray.pop()
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
}