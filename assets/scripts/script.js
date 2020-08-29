

let menos   = document.getElementById("-");
let mas     = document.getElementById("+");
let por     = document.getElementById("*");
let divisor = document.getElementById("/");
let final   =document.getElementById("final");

menos.addEventListener("click", ()=>{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    final.innerText = restar(numero1, numero2);
   
})

mas.addEventListener("click", ()=>{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    final.innerText = sumar(numero1, numero2);
})

por.addEventListener("click", ()=>{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    final.innerText = mult(numero1, numero2);
})

divisor.addEventListener("click", ()=>{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    final.innerText = dividir(numero1, numero2);
})



let sumar    = (a,b) =>  a + b;
let restar   = (a,b) =>  a - b;
let mult     = (a,b) =>  a * b;
let dividir  = (a,b) =>  a / b;