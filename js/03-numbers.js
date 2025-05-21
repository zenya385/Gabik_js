//* Приведение к числу

const str = '101';
const num3 = 1;
const num = Number(str);

// console.log(+str + num3);
// console.log('1' + 1);
// console.log(1 - '10');

// console.log(num);
// console.log('String :>> ', String(num));
// console.log(str);
// console.log(Number('qwe158')); //NaN

const valueB = 'random string';
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"
// console.log(typeof NaN); // "number"
/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

let elementWidth = '15.11212px';
// console.log(Number(elementWidth)); //nan

elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);

let elementHeight = '20.743px';
elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

// ============================== exsample isNaN() ========================
// const data = Number.parseFloat(prompt('Введите число'));

// if (data) {
//   alert('Ты молодец!');
// } else {
//   alert('Тебя попросили ввести число!');
// }

// const total = data + data;

// console.log('data :>> ', data);
// console.log('total :>> ', total);

// ========================================================================

/*
 * - Метод Number(число.toFixed(digits))  возващает стороку, потому нужно привести к числу
 * - Матрёшки на примере  console.log( Number(число.toFixed(digits)))
 */
let salary = 1300.1647223456789;
salary = Number(salary.toFixed(2));
// console.log(salary);

//* Сложение чисел с плавающей точкой

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);
// console.log(0.5 + 0.3 === 0.8);

// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log(Number((0.17 + 0.24).toFixed(2))); //0.41

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
let quantity = '30';
let value = Number('Эту строку невозможно привести к числу');

// console.log(Number.isNaN(quantity)); // false
// console.log(Number.isNaN(value)); // true

// console.log(Number.isNaN(value)); // typeof NaN  number
// console.log(typeof NaN); // typeof NaN  number

const validNum = Number('51'); // 51
// console.log(Number.isNaN(validNum)); // false

const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

const num1 = 15;
const num2 = 55;

Math.floor(num); // возвращает целое число, меньшее, либо равное указанному
// console.log(Math.floor(1.999)); // 1

Math.ceil(num); // возвращает найбольшее целое число, большее, либо равное указанному числу.
// console.log(Math.ceil(1.00001)); // 2

Math.round(num); // возвращает значение числа, округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

Math.max(num1, num2); // возвращает наибольшее число из набора console.log(Math.max(20, 10, 50, 40));  50
// console.log('Math.max([20, 10, 50, 40]); :>> ', Math.max(...[20, 10, 50, 40]));

Math.min(num1, num2); // возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent); // возведение в степень
// console.log('Math.pow(2, 4)', Math.pow(2, 4)); // 16

Math.random(); // возвращает псевдослучайное число в диапазоне [0, 1)
//1 Запомни формулу для рандомного целего числа в диапазоне [min, max]
//! Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (1 - 10) + 1); // псевдослучайное число от 1 до 9.99
// console.log(Math.floor(Math.random() * (10 - 1) + 1)); // псевдослучайное целое число от 1 до 9
// console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1)); // псевдослучайное число от 1 до 10
// console.log(Math.floor(Math.random() * (40 - 20 + 1) + 20)); // псевдослучайное число от 20 до 40

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
// const base = Number(prompt('Введите число'));
// console.log(base);

// //  2. попросить ввести степень и сохранить в переменную
// const power = Number(prompt('Введите степень'));

// console.log(power);

// //  3. Возвести введенные данные в степень и вывести

// // const result = base ** power;
// const result = Math.pow(base, power);
// console.log(result);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
// const max = 10;
// const min = 1;
// Math.random() * (max - min) + min;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

const colors = [
  'tomato',
  'teal',
  'orange',
  'deeppink',
  'skyblue',
  'red',
  'purple',
  'yellow',
  'black',
  'blue',
  'white',
];
// console.log(colors);
// console.log(colors.length);
// console.log(colors.length - 1);

const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;

const string = 'Hello wold!';
const number = 100;
const boolean = true;
const specialeNull = null;
const special = undefined;

// console.log('string :>> ', string);
// console.log('number :>> ', number);
// console.log('boolean :>> ', boolean);
// console.log('specialeNull :>> ', specialeNull);
// console.log('special :>> ', special);

let name = true;
// console.log('name :>> ', typeof '120');

const object = {
  id: 25,
  name: 'Gabik',
  bool: true,
};

// console.table(object);
// console.log(object);
// console.dir(object);
// console.warn(object.name);
// console.error(object.id);

// alert('ай яй яй');

// const data = Number(prompt('Введи что-то'));

// const confirmq = confirm('Ты мальчик?');

// console.log(data);
