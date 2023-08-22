async function getData(url){
    const res = await fetch(url);

    return await res.json();
};

const url = `https://api-js-study.glitch.me/`
async function logItens(){
    const data = await getData(url)

    for(p of Object.entries(data)){
        console.log(`${p[0]}: ${p[1]}`)
    }
}

logItens()