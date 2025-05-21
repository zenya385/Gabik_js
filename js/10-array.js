



const friends = ["Kiwi", "Mango", "Ajax", 'Roman','Gabrielius'];

// console.log('friends[3]', friends[3]);
// console.log('friends.length', friends.length);

// for(let i = 0; i < friends.length; i += 1){
// const elem = friends[i];
// console.log(`${i+1}`, elem)
// }

// length - 1
// длина_массива - 1 

// const lastIndex = friends.length - 1;

// console.log('lastIndex', lastIndex);

// console.log( friends[lastIndex] )
// console.log( friends[friends.length - 1] ) // последний елемент в масиве

// console.log('friends', friends)

// friends[4] = 'Ivan';


// console.log('friends', friends)

// for (const el of friends) {
//     console.log('el:=>', el)
//    console.log(' friends.length',  friends.length)
// }


// for (let i = 0; i < friends.length; i += 1) {
//     friends[i] += `-${i}`;
    // console.log(`${i + 1}.`, friends[i]);
//   }
// console.table(friends);

const programingLanguige = "Java Script";

// for (let i = 0; i < programingLanguige.length; i+=1) {
//     // const element = programingLanguige[i];
//     console.log(`${i}. ${programingLanguige[i]}-${i+1}` )
// }

// ========================Цикл for...of ==========================
for (const friend of friends) {
  // console.log('friend=>', friend);  
}

// =========================== Цикл for =========================
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    
    // console.log('friend2=>', friend) ; 
}


// ========================== Операторы break и continue =============================





//* ========================== Задачки =============================


// Дан следующий массив:

const numbers = [1, 2, 3, 4, 5, 6];
// Выведи на экран сумму элементов этого массива.

// console.log(numbers[0] + numbers[1]);
//$ ================= for of 
let sum = 0;
for (const number of numbers) {
  sum += number;
}
// console.log('sum :>> ', sum); //21

//$ ================= for
let sumNumbers = 0;
for(let i = 0; i < numbers.length; i+=1){
 sumNumbers += numbers[i]
}
// console.log('sumNumbers :>> ', sumNumbers);


// const num = 23;
let num1 = 23;

// console.log('num1 :>> ', num1);

num1 = 32;

// console.log('num1 :>> ', num1);


const arr = [1, 2, 3];

for (const iterator of arr) {
  
  console.log('i :>> ', iterator);
}

console.log('arr :>> ', arr);

arr[0] = 5;

console.log('arr :>> ', arr);