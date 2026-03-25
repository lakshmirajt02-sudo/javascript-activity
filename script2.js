// Switch 
// Exercise 1 - Day of week 
let day=5;
switch(day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("Invalid day");    
}

// Exercise 2 - Fruit color 
let fruit = "banana"
switch(fruit){
    case 'apple':
        console.log('red');
        break;
    case 'banana':
        console.log('yellow');
        break;
    case 'grape':
        console.log('purple');
        break;
    case 'lime':
        console.log('green');
        break;
    default:
        console.log('Unknown fruit');
}

// Exercise 3 - Browse detection 
let browser = "firefox";
switch (browser){
    case 'chrome':
        console.log("V8 Engine");
        break;
    case 'firefox':
        console.log("SpiderMonkey");
        break;
    case 'safari':
        console.log("JavaScriptCore");
        break;
    case 'Edge':
        console.log("V8 Engine");
        break;
    default:
        console.log("Unknown browser");       
}

// Exercise 4 - Vowel Checker 
let char = "E";
switch(char){
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
            console.log("Consonants");
        }
        else{
            console.log("Invalid input");
        }     
}

// Exercise 5 - Simple Calculator 
let num1 = 10;
let num2 = 5;
let operator = "*";
switch(operator){
    case '+':
        console.log( num1 , " + ", num2 , " = " , num1+num2 );
        break;
    case '-':
        console.log( num1 , " - ", num2 , " = " , num1-num2 );
        break;
    case '*':
        console.log( num1 , " x ", num2 , " = " , num1*num2 );
        break;
    case '/':
        console.log( num1 , " / ", num2 , " = " , num1/num2 );
        break;
    default:
        console.log('Invalid operator');
}

// Exercise 6 - Month Days 
let month = "March";
let leapyear;
switch (month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log("31");   
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log("30");   
        break;   
    case 'February':
        console.log(leapyear?29:28);
        break;
    default:
        console.log('Invalid month');
}

// Exercise 7 - GPA 
let grade = "B";
switch (grade){
    case "A":
    case "a":
        console.log('4.0');
        break;
    case "B":
    case "b":
        console.log('3.0');
        break;
    case "C":
    case "c":
        console.log('2.0');
        break;
    case "D":
    case "d":
        console.log('4.0');
        break;
    case "F":
    case "f":
        console.log('0.0');
        break;    
    default:
        console.log('Invalid grade');
          
}