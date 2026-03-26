// for loop 
// Exercise 1 - Sum all numbers 
let num = [1, 2, 3, 4, 5];
let sum = 0;
for ( let i=0; i<5; i++){
    sum += num[i];
}
console.log(sum);

// Exercise 2 - Print array
let animals = ['cat', 'dog', 'bird'];
for (let animal of animals){
    console.log(animal);
}

// Exercise 3 - Object properties
let person = {
    name : "Alice", 
    age:25,
    city:"NYC"
}
for (key in person){
    console.log(key, " : ", person[key], ",");
}

// Exercise 4 - Character count
let string = "hello world";
let count = 0;
for ( let char of string){
    if( char !== " "){
        count++
    } 
}
  console.log(count);

// Exercise 5 - Multiplication table
for ( let i = 1; i<=5; i++){
    for ( let j = 1; j<=3; j++){
        console.log(i ,' x ', j , ' = ', i*j);  
    }
}

// Exercise 6 - Find maximum
// let val = [5, 2, 8, 1, 9, 3];

// Exercise 7 - Filter even numbers
let ar = [1, 2, 3, 4, 5, 6];
for (let val of ar){
    if( val % 2 == 0){
        console.log(val);
    }
}

// Exercise 8 - Count property values
let stat = [ {status:"active"}, {status:"active" }, {status :"inactive"}];
for (key in stat){
    for (count of stat)
}
