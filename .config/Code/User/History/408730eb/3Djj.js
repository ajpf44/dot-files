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
  const links = elPostTitle.map(el=> el.firstElementChild)

  for(const l of links) console.log(l.innerHTML)
}

getNewsFromTN()