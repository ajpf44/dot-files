async function getWebhook(url){
    const res = await fetch(url)

    return await res.json()
}

async function executeWebhook(url){
    const webhook = await getWebhook(url)
    const url = `https://discord.com/api/webhooks/${webhook.id}/${webhook.token}`

    const data = {
        content: "eu amoo meu caminhão. é o melhor caminhão do mundo. é grande, é forte, é poderoso. eu posso levar qualquer coisa nele. eu posso levar minha família, meus amigos, minhas coisas. eu posso ir a qualquer lugar com ele. eu amo dirigir meu caminhão. é tão divertido. eu amo a sensação do vento no meu cabelo e do sol no meu rosto. eu amo o som do motor rugindo. eu amo a sensação de liberdade que eu sinto quando eu estou dirigindo meu caminhão.

        meu caminhão é o melhor caminhão do mundo porque ele é tudo o que eu preciso em um caminhão. ele é grande, é forte, é poderoso, é confortável e é divertido de dirigir. eu sou muito feliz com meu caminhão e eu nunca o trocaria por nada.",
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