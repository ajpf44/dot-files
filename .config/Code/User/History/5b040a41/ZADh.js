async function getWebhook(url){
    const res = await fetch(url)

    return await res.json()
}

async function executeWebhook(url){
    const webhook = await getWebhook(url)
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

const url = 'https://discord.com/api/webhooks/602880882050596910/4QxG6ghZ66BRSH1WEXGmcNRKc4KgxkTNAsXhsXZUBqksFqyxcoMeWb9mvqDHGeFm-VSM'
//const url='https://discord.com/api/webhooks/1142219578160721973/bEfMuhNzn8fJGdADD639eUl5e8wEtcefNbcV6my1vN2yDHpTIBybvs9ZxCGBzyLFd1d_'
executeWebhook(url)