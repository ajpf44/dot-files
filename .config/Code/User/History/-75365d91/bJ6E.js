class Test extends URL{
    log = function (str){
        console.log(this.hostname + ' ' +str)
    }
    hostname = this.hostname + 'Oloquinho meu'    
}

const t = new Test('https://www.google.com/')

console.log(t.hostname)

