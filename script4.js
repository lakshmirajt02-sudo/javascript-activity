// Nested loop
// Q1 numbers from 1 to 3 
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++ ){
        console.log(i , j);
    }
}

// Q2 3 X 3 square of stars
let sq = ""
for( let i = 1; i <= 3; i++){
    for(let j = 1 ; j <= 3; j++){
       sq += "*";
    }
    sq += "\n"
}
console.log(sq);

// Q3 multiplication pairs from 1 to 2 and 1 to 4
for( let i = 1; i <= 2; i++){
    for(let j = 1 ; j <= 4; j++){
      console.log( i ,"x", j);
    }
}

// Arrow functions
// Q1 Returns square of a number
const square = (a) => a * a;
console.log(square(4));

// Q2 Check whether a number is even
const iseven = (b) => b % 2 == 0;
console.log(iseven(6));

// Q3 Join first name and last name
const joinName = (x , y) => x + " " + y;
console.log(joinName('Spider', 'Man'));

// Anonymous Function 
// Q1 print name
const name = function(){
    console.log('Lakshmi');   
}
name();

// print message after 2 seconds
setTimeout( function(){
    console.log("Hello World");   
}, 2000);

// IIFE
// Q1 print welcome to JavaScript
(function(){
    console.log('Welcome to JavaScript');
})();

// Q2 Store a secret number and print it
(function(){
    let secret = 42;
    console.log("secret is : ", secret);
})();

// Callbacks
// Q1 pass doubled value to the callback
function doublednum(num, callback){
    let doubled = num * 2;
    callback(doubled);
};
doublednum(10, function(result){
    console.log(result); 
});

// Q2 print task done after callback runs

// Q3 print success message
function success(msg , callback){
    console.log('The message: '+ msg);
    callback();
}
success("Success!", ()=>{
    console.log('message');
});

// Mixed practice
//use function inside loop to print 1 to 5
const printNum = (num) => {
    console.log(num);
}
for( let i = 1; i <= 5; i++){
    printNum(i)
}

for( let i = 1; i <= 4; i++){
    let star ="";
    for(let j = 1; j <= i; j++){
         star += '*';
    }
    console.log(star);
}