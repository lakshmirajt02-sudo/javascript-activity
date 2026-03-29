// forEach()
// Q1
let arr = [1, 2, 3]
arr.forEach(num =>{
    console.log(num);
}); 

//Q2
let ar = [1, 2, 3]
ar.forEach(num =>{
    console.log(num + 10)
});
// Q3
let a = [2, 3, 4]
a.forEach(num =>{
    console.log(num * num);
});

// Q4
let fruit = ["apple", "banana"]
fruit.forEach(item=>{
    console.log(item.toUpperCase());
});

// Q5
let val = [10, 20, 30, 40]
let count = 0;
val.forEach(itm =>{
    count+=1
});
console.log(count);   

// Q6
let value = [5, 10, 15]
let sum=0;
value.forEach(itm =>
    sum+=itm
);
 console.log(sum);

 // Q7
 let array = [2, 5, 8, 11, 14]
 let cout = 0;
 array.forEach(itm =>{
    if(itm % 2 === 0){
        cout+=1
    }
 });
 console.log(cout);

 // Q8
 let number = [1, 2, 3]
 let newarr = []
number.forEach(itm =>{
    newarr.push(itm * 2);
});
console.log(newarr);

// Q9
let ary = ['a', 'b', 'c']
ary.forEach((itm, ind )=>{
    console.log(ind, " : ", itm);  
});

// Q10
let words = ["book", "pen", "notebook"]
let wordcount = [];
words.forEach(itm =>{
   wordcount.push(itm.length) ;
});
console.log(wordcount);

// map function
// Q1 Double each number in an array.
let arry=[4,9,7,5,3];
let newArry=arry.map(item=>item*2)
console.log(newArry);

// Q2 Convert numbers into strings.
let ara=[4,9,7,5,3];
let newAra=ara.map(item=>item.toString())
console.log(newAra);

// Q3 Convert all strings to uppercase.
let stri=['mang','rj','tata']
let upper=stri.map(item=>item.toUpperCase())
console.log(upper);

// Q4 Get the length of each word.
let strg=['mang','rj','tata']
let findlength=strg.map(item=>item.length)
console.log(findlength);

// Q5 Add 5 to every element.
let arR=[4,9,7,5,3];
let newArrr=arR.map(item=>item+5)
console.log(newArrr);

// Q6 Extract only the names from an array of objects.
let objArray= [{ name: 'A' }, { name: 'B' }]
let newAr=objArray.map(item=>item.name)
console.log(newAr);

// Q7 Add GST to each product price.
let proPrice = [{ price: 500 }, { price: 1000 }]
let newAry=proPrice.map(item=>item.price+(item.price * 0.18))
console.log(newAry);

// Q8 Create an array showing whether each number is even
let n = [1, 2, 3, 4, 5];
let res = n.map(num => num % 2 === 0);
console.log(res);

// Q9 Format first name and last name into full names
let p = [{ first: 'A', last: 'B' }]
let newp = p.map(item => item.first +" "+ item.last);
console.log(newp);

// Q10 Convert an array into objects like { value: x }.
let aR = [1, 2, 3, 4];
let result = aR.map(num => ({ value: num }));
console.log(result);

// filter function
// Q1 Get all even numbers from an array
const ray = [1, 2, 3, 4]
const evnNo =ray.filter(num => num % 2 === 0);
console.log(evnNo);

// Q2 Get numbers greater than 10
const numb = [5, 12, 18]
const greater = numb.filter(num => num > 10 );
console.log(greater);

// Q3 Filter strings longer than 5 character
const fruits = ['apple', 'banana', 'pear']
const newFruit = fruits.filter(itm => itm.length > 5);
console.log(newFruit);

// Q4 Remove falsy values from an arra
const arrr = [0, 1, false, '', 2]
const newarrr = arrr.filter(num => num != 0);
console.log(newarrr);

// Q5 positive numbers
const posi = [-2, -1, 0, 1, 2]
const positive = posi.filter(num => num > 0);
console.log(positive);

// Q6 Filter users who are above 18 years old
const obj = [{age:20}, {age:17}]
const newobj = obj.filter(itm => itm.age > 18);
console.log(newobj);

// Q7 products with price below 1000
const product = [{price:800}, {price:1200}]
const newproduct = product.filter(itm => itm.price > 1000);
console.log(newproduct);

// Q8 Remove duplicate values from an array
const dupli = [1, 2, 1, 3, 2]
const newval = dupli.filter((value , index) => dupli.indexOf(value) === index );
console.log(newval); 

// Q9 filter only active users
const users = [{active:true}, {active:false}]
const activeuser = users.filter(itm => itm.active);
console.log(activeuser);

// Q9 Filter words that start with the letter a 
const frt = ['apple', 'banana', 'apricot']
const newfrt = frt.filter(word => word.startsWith('a') );
console.log(newfrt);

// reduce function
// Q1 sum of all numbers 
const no = [1, 2, 3]
const total = no.reduce((acc,curr) => acc+curr , 0);
console.log(total);

// Q2 Multiply all numbers in an array
const valuue = [2, 3, 4]
const multi = valuue.reduce((acc,curr) => acc * curr);
console.log(multi);

// Q3 Count the total number of elements
const element = ['a', 'b', 'c']
const elecount = element.reduce((acc,curr) => acc + 1 , 0);
console.log(elecount);

// Q4 Find the maximum number
const max = [5, 9, 2]
const maximum = max.reduce((acc,curr) => acc < curr ? curr: acc ,max[0]);
console.log(maximum);

// Q5 Concatenate all strings into one string
const str = ['a', 'b', 'c']
const onestr = str.reduce((acc, curr) => acc+curr)
console.log(onestr);

// Q6 Count how many even numbers are present
const check = [1, 2, 3, 4]
