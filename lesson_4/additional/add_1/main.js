// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
let arrOfNumbers = [1, 2, 3, 4, 5];
let arrOfStrings = ['a', 'b', 'c', 'd', 'e'];
let array = [100, 200, '100', true, false];
console.log(arrOfNumbers);
console.log(arrOfStrings);
console.log(array);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [];
arr[0] = 555;
arr[1] = 'string';
arr [2] = true;
arr[3] = false;
console.log(arr);
//
//

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < arr2.length) {
//     console.log(arr2[i])
//     i++
// }
// ;

//     2. перебрати його циклом for
// for (let j = 0; j < arr2.length; j++) {
//     console.log(arr2[j])
//
// }
// ;

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arr2.length) {
//
//     if (i % 2 !== 0) {
//         console.log(arr2[i])
//     }
//     i++
// }
// ;

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 0; j < arr2.length; j++) {
//     if (j%2 !== 0){
//         console.log(arr2[j])
//     }
//  }
// ;

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr2.length) {
//     if (arr2[i]%2 === 0){
//         console.log(arr2[i])
//     }
//     i++
// }
// ;

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//         console.log(arr2[i])
//     };
// };

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i]%3 === 0){
//       arr2[i] = 'okten';
//   ;}
// };
// console.log(arr2);

// 8. вивести масив в зворотньому порядку.
// for (let i = arr2.length - 1; i >= 0; i--) {
//     console.log(arr2[i])
// };


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// for (const number of numbers) {
//     console.log(number)
// };

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strings = ['Hello', 'Okten', ',', 'I', 'like', 'you', 'very', 'much', ')', '!'];
// for (const string of strings) {
//     console.log(string)
// };

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr3 = [1,2,3,true,false,'hkjkjlklk'];
// for (const arr3Element of arr3) {
//     console.log(arr3Element)
// };

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr4 = [1,true,3,4,5,6,true,false,'string', 'string2'];
// for (const arr4Element of arr4) {
//     if (typeof arr4Element === 'boolean'){
//         console.log(arr4Element)
//     }
// };
//
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (const arr4Element of arr4) {
//     if (typeof arr4Element === 'number'){
//         console.log(arr4Element)
//     }
// };
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (const arr4Element of arr4) {
//     if (typeof arr4Element === 'string'){
//         console.log(arr4Element)
//     }
// };
//

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let arr5 = [];
// arr5[0] = true;
// arr5[1] = false;
// arr5[2] = 777777;
// arr5[3] = 'true';
// arr5[4] = 'false';
// arr5[5] = 444;
// arr5[6] = 0;
// arr5[7] = 'hello';
// arr5[8] = 'JS';
// arr5[9] = 234567;
// for (const arr5Element of arr5) {
//     console.log(arr5Element)
// };

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// };
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// };
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// };
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`)
//     }
// };
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`)
//     }
// };


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let books = [
//     {name: 'Kobzar', pages: 700, authors: 'Taras Shevchenko', genres: 'poetry'},
//     {name: 'Zakhar Berkut', pages: 300, authors: 'Ivan Franko', genres: 'historical story'},
//     {name: 'Angelica and the king', pages: 500, authors: 'Anne and Serge Holon', genres: 'novel'}
//    ];
// ?????????????????????????????

// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

// ___________________________________________________________________________________________________________________
