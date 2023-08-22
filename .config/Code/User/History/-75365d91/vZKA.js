
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr =[]
    for(let i = 1; i <=n; ++i){
        arr.push(i)
        if(i%3 == 0){
            arr[i-1] = 'Fizz'
        }
        if(i%5 == 0){
            arr[i-1] = (typeof(arr[i-1])===typeof(1)?'Buzz': arr[i-1]+'Buzz')
        }
    }

    console.log(arr)
};


fizzBuzz(20)
