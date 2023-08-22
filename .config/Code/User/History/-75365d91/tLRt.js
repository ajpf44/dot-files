
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr =[]
    for(let i = 1; i <=n; ++i){
        arr.push(i)
        if(i%3 == 0){
            arr[i] = 'Fizz'
        }
        if(i%5 == 0){
            arr[i] = (typeof(arr[i])===typeof(1)?'Buzz': arr[i]+'Buzz')
        }
    }

    console.log(arr)
};


fizzBuzz(10)
