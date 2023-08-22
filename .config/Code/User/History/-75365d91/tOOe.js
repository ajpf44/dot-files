class Test extends URL{
   
}

const t = new Test('https://www.google.com/')

console.log(t.hostname)

class MyRequestBuilder extends RequestBuilder {
    requestOptions = Object.assign({}, super.requestOptions, {
      headers: 'myCustomHeader'
    });
}