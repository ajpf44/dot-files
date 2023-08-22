import { JSDOM } from 'jsdom';

async function getHTML(url){
  const res = await fetch(url)
  

  const txt = await res.text()
  return txt
}

export default async function getNewsFromG1(){
  const g1URL = 'https://thenewscc.com.br/'
  const htmlBody = await getHTML(g1URL)
  const dom  = new JSDOM(htmlBody)
  
  const titles=  [...dom.window.document.getElementsByTagName('h2')];
  let newsText = ''
  
  for(let i = 0;i <3; ++i)
    newsText += titles[i].innerText+'\n';
  
  console.log(newsText, 'text');
  return newsText;
}

getNewsFromG1()