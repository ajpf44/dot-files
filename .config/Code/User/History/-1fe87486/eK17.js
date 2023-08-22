async function getTxt(file){
    const res = await fetch(file)

   return await res.text()
}


async function writeFile(file, data){
    const res = await fetch(file, {
        method: 'POST',
        body: await getTxt(file) + data
    })
    
    console.log(res)
}

const fileURL = '/home/ajpf/prog/js/text.txt'
const txt = '\nEu particulamente sou um grande fã de parmesão'

writeFile


