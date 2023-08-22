const whURL = `https://discord.com/api/webhooks/1142219578160721973/bEfMuhNzn8fJGdADD639eUl5e8wEtcefNbcV6my1vN2yDHpTIBybvs9ZxCGBzyLFd1d_`

async function gerWebHook(){
    const res = await fetch(whURL)

    console.log(await res.json())
}

