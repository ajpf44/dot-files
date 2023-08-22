const webhookID = '1142219578160721973'
const endpoint = `/webhooks/${webhookID}`
const url = 'https://discord.com/api/v10/' + endpoint;

async function main(){
    const res = await fetch(url)

    console.log(await res.json())
}

main()