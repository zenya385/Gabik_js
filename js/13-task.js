 //* 1.1 Задачки JavaScript

// №1
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

// const num = Number(prompt('Введите число:'))

// console.log('num :>> ', num);

// if(num < 0){
    // console.log(`число ${num} отрицательное` );
// }else{
    // console.log(`число ${num} положительное` ); 
// }

// №2
// Дана строка. Выведите в консоль длину этой строки.

// const string = 'Java Script';
// console.log(`Длина стороки 'Java Script'=> ${string.length} символов` );


// №3
// Дана строка. Выведите в консоль последний символ строки.
// const string = 'Java Script';
// console.log(`Последний символ строки 'Java Script'=> ${string[string.length -1]} ` );



// №4
// Дано число. Проверьте, четное оно или нет.

// let number = Number(prompt('Введите число:'));

// Преобразование строки в число
// number = parseFloat(number);

// Проверка и вывод результата
// if (number % 2 === 0) {
//     console.log("Число четное.");
// } else {
//     console.log("Число нечетное.");
// }

// №5
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const str1 = "Sonik";
// const str2 = "Sova";

// if(str1[0] === str2[0]){
//     console.log(`Первые буквы слов ${str1} ${str2} совпадают`);
// }else{
//     console.log(`Первые буквы слов ${str1} ${str2} не совпадают`);
// }


// №6
// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то 
// получите предпоследнюю букву.


const word = 'писарь';

if(word[word.length - 1] === 'ь' ||  word[word.length - 1] === 'ъ'){
   console.log(`Последняя буква в слове ${word} => ${word[word.length - 2]}`);
}else{
  console.log(`Последняя буква в слове ${word} => ${word[word.length - 1]}`);   
}



//*  Уровень 1.2 задачника JavaScript
// №1
// Дано число. Выведите в консоль первую цифру этого числа.

const number = 5926;

const firstNumber = String(number)[0]
console.log('firstNumber :>> ', firstNumber);

// №2
// Дано число. Выведите в консоль последнюю цифру этого числа.
const lastNumber = String(number)[String(number).length - 1]
console.log('lastNumber :>> ', lastNumber);


// №3
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
const sum = Number(firstNumber) + Number(lastNumber);
console.log('sum :>> ', sum);

// №4
// Дано число. Выведите количество цифр в этом числе.
const num = 489523;
 
const lengthNum = String(num).length;

console.log('lengthNum :>> ', lengthNum);

// №5
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
const num2 = 4444;
const num3 = 4555;

if(String(num2)[0] === String(num3)[0]){
  console.log('Числа совпадают :>> ');
}else{
  console.log('Числа не совпадают :>> ');
}



// №1
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

const str = "java script";

if(str.length > 1 ){
  console.log(`предпоследний символ этой строки :>> ${str[str.length - 1]}`);
}



// №2
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

const num4 = 6
const num5 = 2

if((num4 % num5) === 0){
console.log('Ура ! Делится :>> ')
}



// №1
// Выведите в консоль все целые числа от 1 до 100.

// №2
// Выведите в консоль все целые числа от -100 до 0.

// №3
// Выведите в консоль все целые числа от 100 до 1.

// №4
// Выведите в консоль все четные числа из промежутка от 1 до 100.

// const minNamber = 1
// const maxNamber = 100
// let namberAll = 0 
// for (let i = minNamber; i <= maxNamber; i += 1) {
//   if (i % 2 === 0) {
//     console.log("четное i: ", i);
//     namberAll += i
//   }
// }

// №5
// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

// const minNamber = 1
// const maxNamber = 100
// let namberAll = 0 
// for (let i = minNamber; i <= maxNamber; i += 1) {
//   if (i % 3 === 0) {
//     console.log("четное i: ", i);
//     namberAll += i
//   }
// }



//! Уровень 1.6 задачника JavaScript
// №1
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let powNum = 0
let total = 0
for (const number of numbers) {
 powNum = Math.pow(number, 2) 
 total += powNum
 console.log('powNum :>> ', powNum);
}
console.log('total :>> ', total);


// №2
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

// №3
// Дан массив с числами. Найдите сумму положительных элементов этого массива.

// №4
// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.