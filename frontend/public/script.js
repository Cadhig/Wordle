const backEnd = 'http://127.0.0.1:3000'

function keyboardClick(el) {
    console.log(el)
    const display = document.querySelector('.guess-box')
    display.textContent = el

}


async function submitGuess(userGuess) {
    if (userGuess === null) {
        return
    }
    const response = await fetch(`${backEnd}/api/guess`, {
        method: "post",
        body: JSON.stringify({
            guess: userGuess
        })
    }
    )
    const parsedResponse = await response.json()
    console.log(parsedResponse)
}