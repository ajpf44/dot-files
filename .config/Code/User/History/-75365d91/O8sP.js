
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr =[]
    for(let i = 1; i <=n; ++instanceof){
        arr.push(i)
        if(!i%3){
            arr[i] = 'Fizz'
        }
        if(!i%5){
            arr[i] = (typeof(arr[i])===typeof(1)?'Buzz': arr[i]+'Buzz')
        }
    }

    console.log(arr)
};


fizzBuzz(10)
