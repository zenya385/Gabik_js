/*
 * Блочная область видимости переменных
 */

const x = 12;
// console.log('переменная x global -->', x);

if (true) {
  const a = 5;
  // console.log('переменнаяa a block =>', a);
  // console.log('консоль внутри if x + a) =>', x + a);
}

// console.log('переменная a block -->', a);
// console.log('консоль внутри if x + a) =>', x + a);

if (true) {
  const b = 10;
  const x = 15;

  // console.log(x);
  // console.log(a);
}

const value = 5;

if (true) {
  // console.log("Block scope: ", value); // 5
}

// console.log("Global scope: ", value); // 5

const global = 'global';

if (true) {
  const blockA = 'block A';

  // Видим глобальную + локальную A
  // console.log(global); // 'global'
  // console.log(blockA); // block A

  // Переменные blockB и blockC не найдены в доступных областях видимости.
  // Будет ошибка обращения к переменной.
  // console.log(blockB);
  // console.log(blockC);

  if (true) {
    const blockB = 'block B';

    // Видим глобальную + внешнюю A + локальную B
    // console.log(global); // global
    // console.log(blockA); // block A
    // console.log(blockB); // block B

    // Переменная blockC не найдена в доступных областях видимости.
    // Будет ошибка обращения к переменной.
    // console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = 'block C';

  // Видим глобальную + локальную C
  // console.log(global);
  // console.log(blockC);

  // Переменные blockA и blockB не найдены в доступных областях видимости.
  // Будет ошибка обращения к переменной.
  // console.log(blockA);
  // console.log(blockB);
}

// Видим только глобальную
// console.log(global);

// Переменные blockA, blockB и blockC не найдены в доступных областях видимости.
// Будет ошибка обращения к переменной.
// console.log(blockA);
// console.log(blockB);
// console.log(blockC);

const age = 20;
if (true) {
  console.log(`Тебе уже есть ${age} и ты уже взрослый дядя!`);
}

console.log('age :>> ', age);
