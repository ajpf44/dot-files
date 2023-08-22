async function logTxt(arqv){
    const res = await fetch(arqv)

    console.log(await res.text())
}


logTxt('text.txt')