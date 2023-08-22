/* const webhookID = '1142219578160721973'
const endpoint = `/webhooks/${webhookID}`
const url = 'https://discord.com/api/v10/' + endpoint; */


async function getWebhook(){
    const url = 'https://discord.com/api/webhooks/1142219578160721973/bEfMuhNzn8fJGdADD639eUl5e8wEtcefNbcV6my1vN2yDHpTIBybvs9ZxCGBzyLFd1d_'
    const res = await fetch(url)

    return await res.json()
}

async function execute(){
    const webhook = await getWebhook()
    const url = `https://discord.com/api/webhooks/${webhook.id}/${webhook.token}`

    const data = {
        content: 'text text text'
    }
    const res = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    console.log( await res.json() )
}

execute()