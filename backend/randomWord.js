
async function getRandomWord() {
    try {
        const apiCall = await fetch(`https://random-word-api.vercel.app/api?words=1&length=5`)
        const parsedCall = await apiCall.json()
        return parsedCall[0]

    }
    catch (error) {
        console.error(error)
    }
}

module.exports = getRandomWord