export default async function getData(){
    const url = new URL(`https://api-js-study.glitch.me`)

    const res = await fetch(url)

    console.log(await res.json())
}