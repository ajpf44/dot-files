import { JSDOM } from 'jsdom';
async function getDOM(url){
  const res = await fetch(url)
  
  const htmlBody =  await res.text()
  return new JSDOM(htmlBody)
}



async function getNewsFromTN(){
  const tnURL = `https://thenewscc.com.br/`
  const dom = await getDOM(tnURL)

  const elPostTitle = [...dom.window.document.getElementsByClassName('elementor-post__title')]
  const p = []
  const regEx = 
  const links = elPostTitle.map((el, i)=> {
    if(i >= 3)
      p.push(el.nextElementSibling.firstElementChild.innerHTML.replaceAll(, ''))
    else
      p.push(el.nextElementSibling.nextElementSibling.innerHTML.replaceAll(, ''))

    return el.firstElementChild
  })

  for(let i =0; i<3; ++i){
    p[i] = p[i].replace
  }

  for(let i in links){
    console.log(
      `${links[i].innerHTML}\n`+
      `${p[i]}...\n`+
      `-------------------------`
    )
  }
}

getNewsFromTN()