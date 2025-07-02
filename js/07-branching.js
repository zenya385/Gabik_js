/*
 * Оператор ветвеления if
 */
//4  if (условие) {
//4   // тело if
//4  }

//4   if(условие){
//4     //тело if
//4    }else{
//4     //тело else
//4     }

//4   if(условие_1){
//4     //тело if
//4    }else if (условие_2){
//4     //тело else
//4     }
//4    else if (условие_3){
//4     //тело else
//4     }
//4    else if (условие_4){
//4     //тело else
//4     }

if (false) {
  // виполняется тело if
  console.log('виполняется тело if');
}

// console.log('тело if проигнарировано');

// undefined, null, '', 0, false, NaN

if (!(5 > 6)) {
  // console.log('дейсвително 5 не больше 6');
}

// let cost = 0;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
// }
// console.log(cost); // 100

// console.log('дальше');
/*
 * Оператор ветвления if...else
 */

let msg = '';

if (true) {
  msg = 'true, виполнилось тело if';
} else {
  msg = 'false, виполнилось тело else';
}
// console.log(msg);

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

// const value = Number(prompt('Пожалуйста введите сколько вам лет?'));

// console.log('value', value);

// if (value) {
// console.log('Молодець ти ввел число');
// } else {
// console.log('ERROR!!!  ти ввел не число ');
// }

/*
 * Оператор ветвления else...if
 */

//4   if(условие_1){
//4     //тело if
//4    }else if (условие_2){
//4     //тело else
//4     }
//4    else if (условие_3){
//4     //тело else
//4     }
//4    else if (условие_4){
//4     //тело else
//4     }

// const salary = prompt('Ведите сюда вашу зарплату.');

// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary <= 3000) {
//   console.log('Уровень 3');
// } else if (salary > 3000) {
//   console.log('Уровень 4');
// } else {
//   console.log('В противном случаи вы нищий! )))');
// }

// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

// console.log(cost); // 500

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
const balance = -10;
// let message = '';

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

//* <условие> ? <выражение_если_условие_истинно> : <выоражение_если_условие_ложн></выражение_если_условие_ложно>

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// balance >= 0
//   ? (message = 'Позитивный баланс')
//   : (message = 'Негативный баланс');

// console.log(message);

/*
 * Инструкция switch case
 */

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

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

// const subscription = 'pro';
// let cost = 0;

// switch (subscription) {
//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   case 'free':
//     cost = 0;
//     break;

//   default:
//     console.log('Не валідное значение!');
//     break;
// }

// console.log(cost);

let num = 0;
const month = 'март';

switch (month) {
  case 'февлаь':
    num = 2;
    break;
  case 'март':
    num = 3;
    break;
  case 'апрель':
    num = 4;
    break;
  case 'январь':
    num = 1;
    break;

  default:
    break;
}

console.log(num);




