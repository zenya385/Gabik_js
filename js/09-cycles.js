'use strict'

// =============================== while ========================

// let counter = 0;

// while (counter < 10) {
//   // // while (false) {
//       console.log("counter: ", counter);
//     counter += 1;
//   }
//   console.log('counter', counter)

// let clientCounter = 15;
// const maxClient = 30;

// while (clientCounter <= maxClient) {
//   // console.log('clientCounter', clientCounter)
//   clientCounter =+ 1 ; 
// }

// for(let counter = 1; counter < 10; counter += 1){
// console.log('counter', counter)
// } 


const clients = ["Mango", "Poly", "Ajax"];
// console.log('clients length', clients.length)
// console.log(clients[1])
// console.log('clients0', clients0)

for (let i = 0; i < clients.length + 1; i += 1) {
  const element = clients[i];
  console.log( `${i}:${element}`)
}

// =============================== do while ========================

// do {
  //   // console.log("counter: ", counter);
  //   counter += 1;
  // } while (counter < 10);
  // // } while (false)
  
  // let password = "";
  
  // do {
    //   password = prompt("Введите пароль длиннее 4-х символов", "");
    // } while (password.length < 5);
    
    // console.log("Ввели пароль: ", password);
    
    
  
    // =============================== for ========================

    // for (initialization; condition; post-expression) {
    //   // statements
    // }

    // i++
    // ++i

//  for (let i = 0; i >= 10; i += 2) {
// console.log('i: =>', i)
//  }

//* =============================== Задача =======================================


// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

 



let input = 1;
let total = 0;

// 1. prompt для пользователя чтоби он ввел число, проверять действительно ввел пользователь число

// for(let i=0; i >= ; i += 1){
//   if(input){

//   input = Number(prompt("Введите число"));}
//   if(Number.isNaN(input)){
//     alert("Введите число, пожалуйста!!!")
//   }
//   total += input
// }
// console.log(total);


// while (input !== null) {
//   input = Number(prompt("Введите число :"));
//    if(input !== null){

//     if(Number.isNaN(input)){
//       alert("Введите число, пожалуйста!!!")
//     }else{
//       total += input;
//     }
//     // console.log(total);
//   }
  
//   // console.log('input', input)
//   }
//   alert(`Общая сумма ${total} `)

// console.log(total);

// do {
//   input = Number(prompt("Введите число"));
  
//   if(Number.isNaN(input)){
//     alert("Введите число, пожалуйста!!!")
//   }
//   total += input;
//   console.log(total);
// } while (input);


// console.log('input', input)


// for (let index = 1; index <= 10 ; index+=1) {

//   console.log('index', index)
// }