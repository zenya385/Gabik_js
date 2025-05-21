// let name = 'Mango';

// console.log('name :>> ', name);

// name = 'Ivan';

// console.log('name :>> ', name);


// const array = ['Mango', "Poly", 'Ivan'];

// console.log('array :>> ', array);


// array.push('Ihor')

// console.log('array :>> ', array);


// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5


const a = ["Mango"];
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a; 
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Изменим массив, добавив еще один элемент, используя указатель из a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b также изменилось, потому что b, как и a,
// просто содержит ссылку на одно и то же место в памяти
console.log(b); // ["Mango", "Poly"]

// Результат повторяется
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]