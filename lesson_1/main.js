// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
let greeting = 'hello';
let name = 'owu';
let com = 'com';
let ua = 'ua';
let first = 1;
let ten = 10;
let number = -999;
let numbers = 123;
let pi = 3.14;
let x = 2.7;
let y = 16;
let boolean = true;
let boolean1 = false;

console.log(greeting);
console.log(name);
console.log(com);
console.log(ua);
console.log(first);
console.log(ten);
console.log(number);
console.log(pi);
console.log(x);
console.log(y);
console.log(boolean);
console.log(boolean1);

// alert(greeting);
// alert(name);
// alert(com);
// alert(ua);
// alert(first);
// alert(ten);
// alert(number);
// alert(pi);
// alert(x);
// alert(y);
// alert(boolean);
// alert(boolean1);

document.write(greeting);
document.write(name);
document.write(com);
document.write(ua);
document.write(first);
document.write(ten);
document.write(number);
document.write(pi);
document.write(x);
document.write(y);
document.write(boolean);
document.write(boolean1);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)
//
// let firstName = 'Inna';
// let middleName = 'Volodymyrivna';
// let lastName = 'Yevsieienkova';
// let person = ` ${lastName} ${firstName} ${middleName}`;
// console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName = (prompt('Enter you first name'));
let middleName = (prompt('Enter you middle name'));
let lastName = (prompt('Enter you last name'));
let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);