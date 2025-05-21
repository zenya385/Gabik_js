// 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании: 0, NaN, null, undefined, пустая строка и false.

/*
 * Приведение к булю на примере Boolean(value)
 */
const name =  "Mango";

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
// console.log( 5 && 6 ); 
// console.log( 0 && 6 );
// console.log( 6 && 0 );
// console.log(NaN && 4 && null && 'mango');



// const num = prompt("введите число")
// const message = 
// console.log(num && "Все хорошо ви молодец!!!")
// console.log(num && "Ви ввели некоректное число либо пустую строку")



/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

console.log(false || 5 || null || 0);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

// console.log(!5);
