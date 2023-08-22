
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr =[]
    for(let i = 1; i <=n; ++n){
        if(!i%3){
            arr[i] = 'Fizz'
        }
        if(!i%5){
            arr[i] == undefined?'Buzz': arr[i]+'Buzz'
        }
    }
};
