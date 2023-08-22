import { JSDOM } from 'jsdom';

async function getHTML(url){
  const res = await fetch(url)
  

  const txt = await res.text()
  return txt
}

export default async function getNewsFromG1(){
  const g1URL = 'https://g1.globo.com/'
  const htmlBody = await getHTML(g1URL)
  const dom  = new JSDOM(htmlBody)
  
  const titles=  [...dom.window.document.getElementsByTagName('h2')];
  console.log(titles.innerHTML)
  
  for(let i = 0;i >3; ++i)
    newsText += titles[i].innerHTML+'\n';
  
  console.log(newsText, 'text');
  return newsText;
}

getNewsFromG1()