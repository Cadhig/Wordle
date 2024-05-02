

async function response() {
    try {
        const apiCall = await fetch(`https://random-word-api.vercel.app/api?words=1&length=5`)
        const parsedCall = await apiCall.json()
        console.log(parsedCall)
    }
    catch (error) {
        console.error(error)
    }
}

response()