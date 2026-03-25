// Exercise 1 - Grade Checker 
let score = 85;
if (score >= 90){
    console.log("Grade A");   
}
else if (score >= 80){
    console.log("Grade B");   
}
else if (score >= 70){
    console.log("Grade C");   
}
else {
    console.log("Grade F");   
}

// Exercise 2 - Odd or Even 
let num = 7;
if(num % 2 === 0){
    console.log(`${num} is an even number`);  
}
else{
    console.log(`${num} is an odd number`);
}

// Exercise 3 - Age access 
let age = 15;
if (age >= 18){
    console.log("R-rated movie allowed");  
}
else if (age >= 13){
    console.log("PG-13 movie allowed");  
}
else{
    console.log("Pnly G movies allowed");  
}

// Exercise 4 - Temperature Alert 
let temp = 25;
if (temp > 30){
    console.log("Wear light clothes and sunscreen");
}
else if (temp <= 30 && temp >= 20){
    console.log("Wear casual clothes");
}
else if (temp <= 19 && temp > 10){
    console.log("Wear a jacket");
}
else{
    console.log("Wear heavy winter gear"); 
}

// Exercise 5 - Login Validator 
let user = "admin";
let pass = "wrong123";
if (user === "admin" && pass === "password123"){
    console.log("Login successful");
}
else if (user !== "admin" && pass === "password123"){
    console.log("Username incorrect");
}
else {
    console.log("Password incorrect");
}

// Exercise 6 - Traffic Light 
let light = "yellow";
if (light == "red"){
    console.log("STOP!");
}
else if(light == "yellow"){
    console.log("SLOW DOWN!");
}
else{
    console.log("GO!");
}



