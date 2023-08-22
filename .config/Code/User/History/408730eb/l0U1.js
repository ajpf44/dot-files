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
  const regEx = /<(.+?)>/g;

  const links = elPostTitle.map((el, i)=> {
    if(i >= 3)
      p.push(el.nextElementSibling.firstElementChild.innerHTML)
    else
      p.push(el.nextElementSibling.nextElementSibling.innerHTML)

    return el.firstElementChild
  })

  for(let i =0; i<3; ++i){
    p[i] = p[i].replaceAll(regEx, '')
  }

  let newsText = ''
  for(let i = 0; i <5 ;++i){
    newsText += `**Título: ${links[i].innerHTML.trim()}**\n`+
      `${p[i]}...\n`+
      
      `-------------------------`
  }

  return newsText
}

getNewsFromTN()