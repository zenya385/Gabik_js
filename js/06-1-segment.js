/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */

const x1 = 10;
const x2 = 30;
const number = 45;

// console.log(`Число ${number} входит в отрезезок до ${x1}`, number < x1 )
// console.log(`Число ${number} входит в отрезезок от ${x2}`, number > x2 )



// console.log(number > x1 && number < x2);
const result1 =  number > x1 && number < x2;
// console.log(45 > 10 && 45 < 30);

// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

15 > 10 && 15 < 30
// true && true
// true

console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, result1)


// =============================================================


const result2 = number < x1 || number > x2
// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false


console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`, result2)