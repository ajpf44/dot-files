async function logTxt(arqv){
    const res = await fetch(arqv)

    console.log(res)
}


logTxt('text.txt')