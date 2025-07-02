// 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании: 0, NaN, null, undefined, пустая строка и false.

/*
 * Приведение к булю на примере Boolean(value)
 */
const name = Boolean('Mango');
// console.log('name :>> ', name);

// console.log(Boolean(name)); //true
// console.log(Boolean(10)); //true
// console.log(Boolean(' ')); //true
// console.log(Boolean('undefined')); //true
// console.log(Boolean('false')); //true

// ! 6 значениий которие приводятся к false

// console.log(' 0 ->', Boolean(0));
// console.log(' null ->', Boolean(null));
// console.log(' NaN ->', Boolean(NaN));
// console.log(' "" ->', Boolean(''));
// console.log(' false ->', Boolean(false));
// console.log(' undefined ->', Boolean(undefined));

// console.log('true ->', Boolean("false"));
// console.log('true ->', Boolean("10"));
// console.log('true ->', Boolean(10));
// console.log('true ->', Boolean(true));
// console.log('true ->', Boolean(!name));

/*
 * Логическое И (оператор &&)    выражение &&  выражение

 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */
//5  выражение && выражение && выражение && выражение && выражение && выражение;

// console.log(5 && 6);
// console.log(0 && 6);
// console.log(6 && 0);
// console.log(NaN && 4 && null && 'mango');

const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// alert( && 2 && alert(3));

// console.log(false || 5 || null || 0);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

// console.log(!5);
