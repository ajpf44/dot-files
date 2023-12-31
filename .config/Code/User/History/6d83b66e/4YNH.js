const { JSDOM } = require('jsdom')

async function crawlPage(baseURL, currentURL, pages){
    const baseURL_obj = new URL(baseURL)
    const currentURL_obj = new URL(currentURL)

    if(baseURL_obj.hostname !== currentURL_obj.hostname){
        return pages
    }
    
    const normalize_currentURL = normalizeURL(currentURL)
    if(pages[normalize_currentURL] > 0) {
        ++pages[normalize_currentURL]
        return pages
    }

    pages[normalize_currentURL] = 1

    console.log(`starting crawling: ${currentURL}`)
    try {
        const response = await fetch(currentURL)
        
        if (response.status > 399){
            console.log(`Error in fetch with the status codes: ${response.status}, on url: ${currentURL}`)
            return pages
        }

        const contentType = response.headers.get('content-type')
        if(!contentType.includes('text/html')){
            console.log(`Non html response, content-type: ${contentType}, on url: ${currentURL}`)
            return pages
        }

        const htmlBody = await response.text()
        const nextUrls = getUrlFromHTML(htmlBody, currentURL)
        for(nURL of nextUrls){
            pages = await crawlPage(baseURL, nURL, pages)
        }
    } catch (error) {
        console.log(`error in fetch: ${error}, on url ${currentURL}`)
    }

    return pages
}

function normalizeURL(urlS){
    const nURL = new URL(urlS)
    let pURL = `${nURL.host}${nURL.pathname}`

    while(pURL.endsWith('/')){
        pURL = pURL.slice(0, -1)
    }

    return pURL
}

function getUrlFromHTML(htmlBody, baseURL){
    const urls =[]
    const dom = new JSDOM(htmlBody)

    const linkElements=  dom.window.document.getElementsByTagName('a')
    
    for(const a of linkElements){
        let url = null
        
        if(a.href[0] == '/'){
            let u = new URL(baseURL)
            u.pathname = a.href

            url = u.href
        }
        else url = a.href

        urls.push(url)
    }

    return urls;
}

module.exports = {
    normalizeURL,
    getUrlFromHTML,
    crawlPage
}