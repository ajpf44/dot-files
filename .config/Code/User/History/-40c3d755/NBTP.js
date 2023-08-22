const whURL = `https://discord.com/api/webhooks/1142219578160721973/bEfMuhNzn8fJGdADD639eUl5e8wEtcefNbcV6my1vN2yDHpTIBybvs9ZxCGBzyLFd1d_`

async function getWebHook(){
    const res = await fetch(whURL)

    return await res.json()
}

async function executeWebHook(){
    const webhook = await getWebHook()
    const endpoint = `https://discord.com/api/webhooks/${webhook.id}/${webhook.token}`

    const data= {
        content: 'Lord Alejol, está tudo nos conformes'
    }
    const res =  await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(await res)
}

const now = new Date()
  
const dateMidNight = new Date(now.getFullYear(), now.getMonth(), now.getDate() , now.getHours(), now.getMinutes(), now.getSeconds()+20)


async function main2(){
    setTimeout(()=>{
        return 'acabou'
    }, dateMidNight-now)
}

async function main(){
    console.log(await main2())
}
main()