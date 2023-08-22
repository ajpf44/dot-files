const whURL = `https://discord.com/api/webhooks/1142219578160721973/bEfMuhNzn8fJGdADD639eUl5e8wEtcefNbcV6my1vN2yDHpTIBybvs9ZxCGBzyLFd1d_`

async function getWebHook(){
    const res = await fetch(whURL)

    console.log(await res.json())
}

async function executeWebHook(){
    const webhook = await getWebHook()
    const endpoint = `https://discord.com/api/webhooks/${webhook.id}/${webhook.token}`
    const res =  await 
}