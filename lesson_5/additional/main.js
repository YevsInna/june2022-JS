// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumber = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
    ;
};
minNumber(89, -4, 10);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b)
    } else {
        console.log(c)
    }
    ;
};
maxNumber(0, -3, -2);

// - створити функцію яка повертає найбільше число з масиву
let array = [3, 5, 8, 44];
let maxOfArray = (arr) => {
    let maxNumber = arr[0];
    for (const item of arr) {
        if (item > maxNumber) {
            maxNumber = item
        }
        ;
    }
    ;
    return maxNumber;
};
console.log(maxOfArray(array));

// - створити функцію яка повертає найменьше число з масиву
let minOfArray = (arr) => {
    let minNumber = arr[0];
    for (const item of arr) {
        if (item < minNumber) {
            minNumber = item
        }
        ;
    }
    ;
    return minNumber;
};
console.log(minOfArray(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumOfArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    ;
    return sum;

};
console.log(sumOfArray(array));
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
let n = 12;
let numbers = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(i)
    }
    ;
};
numbers(n);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.
let a = 6;
let b = 1;
let someFunction = (a, b) => {
    if (a < b) {
        for (let i = a; i < b + 1; i++) {
            console.log(i)
        }
    } else if (a>b){
        for (let i = a; i > b - 1; i--) {
            console.log(i)
        }
    }
    ;
};
someFunction(a, b);
//


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let arrWithZero = [0,3,6,0,23,0,7];
let arrZeroToTheEnd = (arr)=>{
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !==0){
            newArr.push(arr[i]);
        };
    };
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] ===0){
            newArr.push(arr[i]);
        };
    };
    return newArr;
};
console.log(arrZeroToTheEnd(arrWithZero));
