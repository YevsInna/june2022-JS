// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x;
// x=0;
// if (x!== 0){
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// };


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('скільки хвилин?');
// if (time > 0 && time <= 15){
//     console.log('перша чверть години');
// } else if (time > 15 && time <= 30){
//     console.log('друга чверть години');
// }else if (time > 30 && time <= 45){
//     console.log('третя чверть години');
// }else if (time > 45 && time <=60){
//     console.log('четверта чверть години');
// }else {
//     console.log('невірно введено число');
// };


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = + prompt('enter day');
// if (day > 0 && day <= 10){
//     console.log('First part of yhe month');
// }else if (day > 10 && day <= 20){
//     console.log('Second part of the month');
// }else if (day > 20 && day <= 31){
//     console.log('Third part of the month')
// }else {
//     console.log('Incorrect day');
// };


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let dayNumber = +prompt('Enter number of day');
// switch (dayNumber) {
//     case 1:
//         console.log('Today is Monday');
//         break;
//     case 2:
//         console.log('Today is Tuesday');
//         break;
//     case 3:
//         console.log('Today is Wednesday');
//         break;
//     case 4:
//         console.log('Today is Thursday');
//         break;
//     case 5:
//         console.log('Today is Friday');
//         break;
//     case 6:
//         console.log('Today is Saturday');
//         break;
//     case 7:
//         console.log('Today is Sunday');
//         break;
//     default:
//         console.log('ERROR')
// }
// ;



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
// let x = 100;
// let y = 100;
// if (x>y){
//     console.log(x);
// }else if (y>x){
//     console.log(y);
// }else {
//     console.log('numbers are equal')
// };



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//  (хибноподыбне, тобто кастується до false)
let x = '' || 'default';
console.log(x);
