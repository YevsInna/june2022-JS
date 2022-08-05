// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b;
console.log(rectangleArea(7, 9));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (r) => 2 * Math.PI * r;
console.log(circleArea(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinderArea = (r,h) => {
//     return (2*Math.PI*r*h) + (2*Math.PI*Math.pow(r,2))
// }
let cylinderArea = (r, h) => (2 * Math.PI * r * h) + (2 * Math.PI * Math.pow(r, 2));
console.log(cylinderArea(3, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayPrint = (arr) => {
    for (const item of arr) {
        console.log(item)
    }
    ;
};
arrayPrint(['Hello', true, false, 67, 89]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textPrint = (str) => {
    document.write(`<p>${str}</p>`)
};
textPrint('створити функцію яка створює параграф з текстом. Текст задати через аргумент');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listCreated = (text) => {
    document.write(`
    <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>
    `)
};
listCreated('Елемент списку');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listCreated2 = (text, number) => {
    document.write(` <ul>`)
    for (let i = 0; i < number; i++) {
        document.write(` <li>${text}</li>`)
    }
    document.write(`</ul>`);
};
listCreated2('Елемент списку2', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let itemsList = (arr)=>{
    document.write(`<ol>`)
    for (const item of arr) {
        document.write(` <li>${item}</li>`)
    }
    document.write(`</ol>`)
};
itemsList([456, true, 'Hello', 890, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let users = [
    {id:1, name: 'Inna', age: 39},
    {id:2, name: 'Maksim', age: 44},
    {id:3, name: 'Bohdana', age: 12},
    {id:4, name: 'Nazar', age: 6}
]

let objectsArray = (arr)=>{
    for (const user of arr) {
        document.write(`<div>`)
        for (const userKey in user) {
            document.write(`<p>${userKey}: ${user[userKey]}</p>`)
        }
        document.write(`</div>`)
    }
};

objectsArray(users)


// - створити функцію яка повертає найменьше число з масиву
let minNumberOfArr = (arr)=>{
    let minNumber = arr[0];
    for (const item of arr) {
        if (item<minNumber){
            minNumber = item;
        };
    };
    return minNumber;
};
console.log(minNumberOfArr([44,2,-8,78,1,0]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let itemSum = (arr)=>{
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        result += number
    }
    return result;
};
console.log(itemSum([1,2,10]));
