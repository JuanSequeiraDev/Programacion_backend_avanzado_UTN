/* 
@param {number} n
@return {Function}

var createCounter = function(n) {
    let integer = n
    //const integerAdd = () => integer++
    return function() {
        if(integer == 10 || integer == -2){
            integer++
            return n
            
        }
        else{
            return integer++
        }
    };
};


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12 */





/* EJERCICIO 3 */

/* 
@param {string} val
 @return {Object}

var expect = function(val) {
    let objeto = {
        toBe: function(value){
            if(value === val){
                return true
            }
            else{
                throw new Error("Not Equal")
            }
        },
        notToBe: function(value){
            if(val !== value){
                return true
            }
            else{
                throw new Error("Equal")
            }
        }    
    }
    return objeto
};

let a = new expect()
 */
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */




//EJERCICIO 5


/* @param { number[] } arr
@param { Function } fn
@return { number[]}

var map = function (arr, fn) {
    const newArr = []
    arr.forEach((item, i) => {
        newArr.push(fn(item, i))
    })
    return newArr
};

console.log(map([1, 2, 3], function plusone(n) { return n + 1 }))
 */


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const argsArr = []
    const cache = []

    return function (...args) {
        if (argsArr.includes(JSON.stringify(args))) {
            return cache.at(argsArr.indexOf(JSON.stringify(args)))
        }
        else if (args.length !== 0 && !argsArr.includes(JSON.stringify(args))) {
            argsArr.push(JSON.stringify(args))
            cache.push(fn(...args))
            return fn(...args)
        }
        else if (args.length === 0) {
            return cache.length
        }
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(callCount)
console.log(memoizedFn(2, 3)) // 5
console.log(callCount)
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1 
console.log(memoizedFn(1, 2))
console.log(callCount) // 2




