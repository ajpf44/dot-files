async function getTxt(file){
    const res = await fetch(file)

   return await res.text()
}

fileURL = '/home/ajpf/prog/js/text.txt'

async function writeFile(file){
    const res = await fetch(file, {
        method: 'POST'
    })

    return await res.text()
}
