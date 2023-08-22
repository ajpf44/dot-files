async function getWebhook(url){
    const res = await fetch(url)

    return await res.json()
}

async function executeWebhook(url){
    const webhook = await getWebhook(url)
    const newURL = `https://discord.com/api/webhooks/${webhook.id}/${webhook.token}`

    const data = {
        content: "meu caminhao e o melhor caminhao do mundo porque ele e tudo o que eu preciso em um caminhao meu caminhao e grande e um caminhao forte um baita caminhao e poderoso é confortavel e tranquilo e gostoso de dirigir meu caminhao. eu sou muito feliz com meu caminhao e eu nunca trocaria por nada meu caminhao no mundo",
    }
    const res = await fetch(newURL, {
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