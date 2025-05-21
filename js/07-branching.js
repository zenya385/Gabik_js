/*
 * Оператор ветвеления if
 */

// undefined, null, '', 0, false, NaN  


// if(!5 > 6) {
// console.log("дейсвително 5 не больше 6");
// }


let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost  = 100;
}

// console.log(cost); // 100


if (false) {
  //  тело
  console.log('qweqwe');
}

// console.log('дальше');
/*
 * Оператор ветвленияif...else
 */

// if(true){
//   console.log("true, виполнилось тело if");
// } else {
//   console.log("false, виполнилось тело else");
// };

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

// const value = Number(prompt("Пожалуйста введите сколько вам лет?"));

// console.log('value', value)

// if(value){
//   console.log("Молодець ти ввел число");
// } else {
//   console.log("ERROR!!!  ти ввел не число ");
// }


/*
 * Оператор ветвления else...if
 */

// const salary = 300;

// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }

// console.log('qweqwe');

// const value = Number(prompt("Пожалуйста введите сколько вам лет?"));

// if(value >= 18){
//   // console.log("Молодець ти ввел число");
//   console.log(" Молодець ти уже взрослий дядя!!!");

// } else if (value < 18){
//   console.log(" Молодець ти еще маленький!!!");

// } else {
//   console.log("ERROR!!!  ти ввел не число ");
// }


/*
 * Тернарный оператор
 */
// const balance = -10;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

//* <условие> ? <выражение_если_условие_истинно> : <выоражение_если_условие_ложн></выражение_если_условие_ложно> 



// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';



// console.log(message);




// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }


// let num = 0
// const  month = 'март'

// switch (month) {
//   case 'февлаь':
// num = 2;
//     break;
//   case 'март':
// num = 3;
//     break;
//   case 'апрель':
// num = 2;
//     break;
//   case 'январь':
// num = 1;
//     break;

//   default:
//     break;
// }

// console.log(num);






