async function getWebhook(){
    const url = 'https://discord.com/api/webhooks/1142219578160721973/bEfMuhNzn8fJGdADD639eUl5e8wEtcefNbcV6my1vN2yDHpTIBybvs9ZxCGBzyLFd1d_'
    const res = await fetch(url)

    return await res.json()
}

async function executeWebhook(){
    const webhook = await getWebhook()
    const url = `https://discord.com/api/webhooks/${webhook.id}/${webhook.token}`

    const data = {
        content: "Hello World!",
    }
    const res = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    console.log( res.status )
}

executeWebhook()