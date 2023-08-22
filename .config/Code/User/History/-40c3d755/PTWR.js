const whURL = `https://discord.com/api/webhooks/1142219578160721973`

async function main(){
    const res = await fetch(whURL)

    console.log(res.body)
}

main()