// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr = [];
// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//         arr.push(i)
//     }
// }
// ;
// console.log(arr);

// for (let i = 1; i < 101; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i)
//     }
// }
// ;
// console.log(arr);

// for (let i = 0; i < 20; i++) {
// let n = Math.floor(Math.random() * 100);
// arr.push(n)
// }
// ;
// console.log(arr);

for (let i = 0; i < 20; i++) {
    let n = Math.floor(Math.random() * (732 - 8) + 8);
    arr.push(n)
}
;
console.log(arr);


// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < arr.length; i += 3) {
//     console.log(arr[i])
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i]%2 === 0){
//         console.log(arr[i])
//     }
// };


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = [];
for (let i = 0; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
    }
    ;
}
;
console.log(newArr);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let numbers = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i - 1])
    }
    ;
}
;

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arr2 = [100, 250, 50, 168, 120, 345, 188];

let sum = 0;
for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
}
;
let avg = sum / arr2.length;
console.log(avg);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArr = [];
let newRandomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr[i] = Math.round(Math.random() * 100);
    newRandomArr[i] = randomArr[i] * 5
}
;
console.log(randomArr);
console.log(newRandomArr);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let array = ['one', 1, 'two', 2, true, 3];
let newArray = [];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        newArray[i] = array[i];
    }
    ;
}
;
console.log(newArray);
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

let usersWithCities = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            usersWithCities.push(
                {
                    id: user.id,
                    name: user.name,
                    age: user.age,
                    status: user.status,
                    address: {
                        user_id: city.user_id,
                        country: city.country,
                        city: city.city

                    }
                }
            );

        }
        ;
    }
    ;
}
;

console.log(usersWithCities);
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr3 = [15,12,7,55,109,84,20,39,800,380];
for (let i = 0; i < arr3.length; i++) {
   if (arr3[i]%2===0){
       console.log(arr3[i]);
   };
};


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу
// скопіювати значення одного масиву в інший.
let arr4 = [1,2,3,4,5,6,7,8,9,10];
let arr5 =[];
for (let i = 0; i < arr4.length; i++) {
   arr5 [i] = arr4[i];
};
console.log(arr5);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = ['a','b','c'];
let string = '';
for (let i = 0; i < abc.length; i++) {
    string += abc[i];
    };
console.log(string);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let string2 = '';
let i =0;
while (i<abc.length){
    string2 += abc[i];
    i++;
};
console.log(string2)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let string3 = '';
for (const item of abc) {
    string3 += item;
};
console.log(string3);