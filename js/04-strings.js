const str = "Java Script"

// console.log(str[4]);
// console.log(str.length);
/*
 * Длина строки, свойство length
 */
const message = 'В этой строке 26 символов.';
// console.log(message.length);

/*
 * Конкатенация строк
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';
// const a = "a";
// const fullName = firstName + ' ' + lastName;

console.log('first', lastName.indexOf('a'));

const fullName =   `${firstName} ${lastName}`
// console.log(fullName);


// Используя переменные необходимо составить строку с подставленными значениями
const guestName = "Манго";
const roomNumber = 207;
const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";

  `Welcome ${guestName}, your room number is ${roomNumber}!`;
  
// console.log(greeting); // "Welcome Mango, your room number is 207!"



/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

const guestFirstName = "Gabrielius";
const guestLastName ="Sbabaliauskas";
const room = 716;
const type = 'VIP';

const welcomeMsg =  'Гость' + ' ' +  guestFirstName + ' ' +  guestLastName + ' ' + 'поселяется в' + ' ' + type + ' ' +  'номер' + ' ' +  room;
`Гость ${guestFirstName}     ${guestLastName} поселяется в  ${type} номер  ${room}`
// console.log(welcomeMsg);

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

const welcomeMsg1 = `Гость ${guestFirstName}     ${guestLastName} поселяется в  ${type} номер  ${room}`
// console.log(orderMsg1);

/*
 * Нормализация с методом toLowerCase()  -> copy
 */
// console.log('ZEnYA' === 'ZENYA');

// let brand = prompt('Давай бренд').toLowerCase();
// brand = brand.toLowerCase();

// console.log(brand);

let brand = 'SamSUnG';

// console.log(brand[4].toLowerCase() );
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);


const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';
// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));


const message1 = "Welcome to Bahamas!";
const mess = message1.toLowerCase();
// console.log(mess); // "welcome to bahamas!"
// console.log(message1.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message1); // "Welcome to Bahamas!"


//* Метод indexOf()  ->  number
//$  Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено.

const message2 = "Welcome to Bahamas!";
// console.log(message2.indexOf("to")); // 8
// console.log(message2.indexOf("Bahamas!")); // 11
// console.log(message2.indexOf("hello")); // -1

//* Метод includes()   ->  boolean
//$  Проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

const productName = "Ремонтный дроид";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроид")); // true
// console.log(productName.includes("Дроид")); // false
// console.log(productName.includes("Ремонтный")); // true
// console.log(productName.includes("ремонтный")); // false

//* Метод endsWith()  ->  boolean
//$  Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false.

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true
// console.log(jsFileName.includes("s")); // true
// console.log(jsFileName.indexOf("s")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false


//* Методы replace() и replaceAll() ->  copy
//$  Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение.

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"
// console.log(jsFileName); // "script.js"


const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

//* Метод slice()  -> copy
//$  Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.

const productName1 = "Repair droid";
// console.log(productName1.slice(0, 4)); // "Repa"
// console.log(productName1.slice(3, 9)); // "air dr"
// console.log(productName1.slice(0, productName1.length)); // "Repair droid"
// console.log(productName1.slice(7, productName1.length)); // "droid"





