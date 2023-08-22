const webhookID = 
const endpoint = `/webhooks/${webhookID}`
const url = 'https://discord.com/api/v10/' + endpoint;

async function main(){
    await fetch(url, method)
}