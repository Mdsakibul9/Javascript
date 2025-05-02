// function findSum(n){
//     let ans = 0
//     for (let i = 0; i< n; i++){
//         ans += i;

//     }
//     return ans;
// }
// function findSumTill100(){
//     console.log(findSum(100));
// }
// setTimeout(findSumTill100,1000)
// console.log("hello world")



// Two Async function till now setTimeout and fs.readFile

// javascript is single threaded just like human being
//first the hello there will be print then the thread will be busy with the for loop
// while completing the for loop the fs.read result will arrive but thread will ignore it for some time
// it is only after completing the for loop and printing hello there 2 thread will then focus on the fs.readFile


// the second function for the asynchronous 
/*
const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data);
})
console.log("hello there")
let a = 0
for(i=0; i<100000; i++){
    a++
}
console.log("hello there 2")
*/


// The promise for the async function
const fs = require('fs');

function sakibReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}

function onDone(data){
    console.log(data);
}
sakibReadFile().then(onDone);