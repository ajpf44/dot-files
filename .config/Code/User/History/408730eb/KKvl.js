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
  const links = elPostTitle.map((el, i)=> {
    
    console.log(el.nextElementSibling.firstElementChild.innerHTML)
    return el.firstElementChild
  })
}

getNewsFromTN()