class Test extends URL{
    log = function (str){
        console.log(this.hostname + ' ' +str)
    }    
}

const t = new Test('https://www.google.com/')

t.log('é muito bom')

