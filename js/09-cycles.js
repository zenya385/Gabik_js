'use strict';

// =============================== while ========================

let counter = 0;

// while (counter < 10) {
//   // // while (false) {
//       console.log("counter: ", counter);
//     counter += 1;
//   }
//   console.log('counter', counter)

// while (counter <= 10) {
// console.log('counter :>> ', counter);
//   counter += 1;
// }

// console.log('counter :>> ', counter);

// let clientCounter = 0;
// const maxClient = 30;

// while (clientCounter <= maxClient) {
//   console.log('clientCounter', clientCounter);
//   clientCounter += 1;
// }
// console.log('clientCounter', clientCounter);

// for (let counter = 1; counter < 10; counter += 1) {
//   console.log('counter', counter);
// }

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

// const clients = ['Mango', 'Poly', 'Ajax'];
// // console.log('clients length', clients.length)
// // console.log(clients[1])
// // console.log('clients0', clients0)

// for (let i = 0; i < clients.length; i += 1) {
//   // const element = clients[i];
//   console.log(`${i + 1}:${clients[i]}`);
// }

// =============================== do while ========================

// do {
//   console.log('counter do while: ', counter);
//   counter += 1;
// } while (counter < 10);
// // } while (false);

// while (false) {
//   console.log('counter while: ', counter);
// }

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

// =============================== while ========================
// let counter = 0;
// const maxNum = 25;

// while (counter < maxNum) {
//   console.log(counter);
//   counter += 1;
// }

// =============================== for ========================
//4  for (initialization; condition; post - expression) {
//4  statements
//4  }

// for (let counter = 15; counter <= 25; counter += 1) {
//   console.log(counter);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
//   }
// }

// console.log('Лог после цикла');

// const number = 10;

// for (let i = 1; i < number; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

// console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

//* =============================== Задача =======================================

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

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

// while (input !== null) {
//   input = prompt('Напиши число');
//   if (Number(input) === NaN) {
//     alert('Было введено не число, попробуйте еще раз');
//   } else {
//     total += Number(input);
//   }
//   console.log(input);
// }
// alert(`Общая сумма чисел равна ${total}`);

// // ===========================================================
// let input = '';
// let total = 0;

// while (input !== null) {
//   input = prompt('Напиши число');

//   if (input === null) break; // щоб не рахувати null

//   if (isNaN(Number(input))) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }

//   total += Number(input);
// }

// alert(`Общая сумма чисел равна ${total}`);

// let input = '';
// let total = 0;
// while (input !== null) {
//   input = prompt('Напиши число');
//   if (input === null) {
//         break;
//   }
//   if (isNaN(Number(input))) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }
//   total += Number(input);
// }
// alert(`Общая сумма чисел равна ${total}`);
