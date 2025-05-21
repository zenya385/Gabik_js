// масив - индексированы набор данных.

// =========================== join() ==========================

const variable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join("=)");
// const str = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10';



const string = variable.split(' ');

console.log('variable :>> ', variable);
console.log('string :>> ', string);

// const name = 'Mango'

// variable.push(false);

// variable.unshift(name);

// variable.pop();

// variable.shift()

// console.log('popVariadle :>> ', x);


// variable.join('')
// variable.join(' ')
// variable.join('-')
// variable.join('_')
// variable.join('=')

// console.log('variable :>> ', variable.join(''));
// console.log('variable :>> ', variable.join(' '));
// console.log('variable :>> ', variable.join('-'));
// console.log('variable :>> ', variable.join('_'));
// console.log('variable :>> ', variable.join('<img>'));

console.log('variable :>> ', variable);

// const str = variable.join(' ');



// console.log('str :>> ', typeof str);



const arr = str.split(' ')

// console.log('str :>> ', Number(str));
// console.log('arr :>> ', arr);
let num = 0;
for (const str of arr) {
     num = Number(str);
//    console.log('num :>> ', num); 
}
// console.log('num :>> ', num); 


// ====================== Метод indexof ==========================
// array.indexof(value)  return number   or  -1

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log('clients :>> ', clients.indexOf('Mango'));
// console.log('clients :>> ', clients.indexOf('Kiwi'));
// console.log('clients :>> ', clients.indexOf('kiwi'));
// console.log('clients :>> ', clients.indexOf('Kiqwi'));



// =========================== Метод includes =======================
// array.includes(value)   return boolean

console.log('clients :>> ', clients.includes('Mango'));
console.log('clients :>> ', clients.includes('Kiwi'));
console.log('clients :>> ', clients.includes('kiwi'));
console.log('clients :>> ', clients.includes('Kiqwi'));