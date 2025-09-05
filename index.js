// console.log(`Hello, World!`);

// window.alert(`i like  pizza`);

//document.getElementById("myh").textContent = "Hello, World!";

// let username;

// document.getElementById("mySubmit").onclick =function(){
//     username = document.getElementById("text").value;
//     document.getElementById("myh1").textContent = `hello, ${username}`;
// }

// let age =window.prompt("Enter your age: ");

// //age = Number(age);

// age+=1;
// console.log(age, typeof age);

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}