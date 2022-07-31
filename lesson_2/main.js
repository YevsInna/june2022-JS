// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [];
array[0] = 'hi, JS))';
array[1] = 8888888;
array[2] = true;
array[3] = false;
array[4] = 'Okten is the best!';
array[5] = 'Slava Ukraini!';
array[6] = 2022;
array[7] = 1;
array[8] = true;
array[9] = true;
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title: 'Kajdasheva simya',
//     pageCount: 100,
//     genre: 'comedy'
// };
// let book2 = {
//     title: 'Lisova pisnya',
//     pageCount: 200,
//     genre: 'drama'
// };
// let book3 = {
//     title: 'Duna',
//     pageCount: 300,
//     genre: 'fantasy'
// };

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book1 = {
    title: 'Kajdasheva simya',
    pageCount: 100,
    genre: 'comedy',
    authors: [
        {name: 'Ivan Nechuj-Levytskyy',age: 73}
    ]
};
let book2 = {
    title: 'Lisova pisnya',
    pageCount: 200,
    genre: 'drama',
    authors: [
        {name: 'Lesya Ukrainka',age: 42}
    ]
};
let book3 = {
    title: 'Duna',
    pageCount: 300,
    genre: 'fantasy',
    authors: [
        {name: 'Frank Herbert',age: 55}
    ]
};
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users =[
    {name: 'Maks', username: 'Batman', password: 'ky-ky'},
    {name: 'Inna', username: 'YevsInna', password: 'ky-ky-sya'},
    {name: 'Nazar', username: 'Syn', password: 'perchyk'},
    {name: 'Bohdana', username: 'Minjon', password: 'banana'},
    {name: 'Vlad', username: 'Vlados', password: 777888000},
    {name: 'Lina', username: 'Kvitka', password: 'ghjg_jlkkl'},
    {name: 'Eva', username: 'Fetisova', password: 3234},
    {name: 'Andriy', username: 'Bear', password: 'Mercedes'},
    {name: 'Vera', username: 'Shram', password: 60908765443},
    {name: 'Marysya', username: 'Nagornyak', password: 'Kyrenivka'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);