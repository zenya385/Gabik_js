/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

// const sub = 'free';
// const sub = 'pro';
const sub = 'vip';

// если пользователь pro или пользователь vip тогда есть доступ

const canAccessContent = sub === 'pro' || sub === 'vip';

// true || false => true
// false || true => true
// false || false => false




// console.log('Есть доступ к контенту? ', canAccessContent);


// alert( null || 0 || undefined );
// alert( alert(1) || 2 || alert(3) );
// alert( 1 && null && 2 );


let value = NaN;

value && (value = 10);
// false && true
console.log(value && (value = 10));

 value ||= 20;
// false || true
console.log( value ||= 20)

// value &&= 30;
// true || true


value ||= 40;
// true || true

alert(value);