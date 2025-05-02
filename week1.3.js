var name = "Sakib"
//console.log(name.length)

function square(n){
    return n * n
}

function cube(n){
    return n*n*n
}

function sumOfSquqares(a,b){
    let asquare = square(a)
    let bsquare = square(b)
    return asquare+bsquare
    
}

result = sumOfSquqares(3,5)
//console.log(result)


// Working with callback functions where a function receive another function to workwith
// To maintain the dry principles
// usually the function name is used as callback
function sumOfSomething(a, b, fn){
    console.log("A= " + a)
    console.log("B= " + b)
    console.log(fn)
    let val1 = fn(a)
    let val2 = fn(b)
    return val1 + val2
}

console.log("results of the squre function: " + sumOfSomething(2, 3, square))
//console.log("results of the cube functions: " + sumOfSomething(2, 3, cube))
// the function can be written like below also
console.log("results of the cube functions: " + sumOfSomething(2, 3, 
    function(n){
        return n * n * n
}))
