
const endpoint = `/webhooks/${webhookID}`
const url = 'https://discord.com/api/v10/' + endpoint;

async function main(){
    const res = await fetch(url)

    console.log(res.json())
}