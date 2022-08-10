// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hello = 'hello world';
let lorem = 'lorem ipsum';
let js = 'javascript is cool';
console.log(hello.length);
console.log(lorem.length);
console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(hello.toUpperCase());
console.log(lorem.toUpperCase());
console.log(js.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let hello1 = 'HELLO WORLD';
let lorem2 = 'LOREM IPSUM';
let js2 = 'JAVASCRIPT IS COOL';
console.log(hello1.toLowerCase());
console.log(lorem2.toLowerCase());
console.log(js2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let string = ' dirty string   ';
console.log(string.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let arr = str.split(' ');
console.log(arr);
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let array2 = array.map(value => value.toString());
console.log(array2);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortNums = (array, direction) => {
    if (direction === 'ascending') {
        array.sort((a, b) => {
            return a - b
        });
    }
    if (direction === 'descending') {
        array.sort((a, b) => {
            return b - a
        });
    }
    ;
};
sortNums(nums, 'ascending');
console.log(nums);
sortNums(nums, 'descending');
console.log(nums);

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortArr = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
});
console.log(sortArr);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = (arr) => arr.filter((value) => value.monthDuration > 5);
console.log(filterArr(coursesAndDurationArray));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardSuit = [
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'joker', color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'joker', color: 'red'},
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'joker', color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'joker', color: 'black'},

];

let findSpadeAce = cardSuit.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(findSpadeAce);

let findAllSix = cardSuit.filter(value => value.value === 6);
console.log(findAllSix);

let findAllRed = cardSuit.filter(value => value.color === 'red');
console.log(findAllRed);

let findAllDiamond = cardSuit.filter(value => value.cardSuit === 'diamond');
console.log(findAllDiamond);

let findAllClubs = cardSuit.filter(value => value.cardSuit === 'clubs' && value.value != 6 && value.value != 7 && value.value != 8);
console.log(findAllClubs);

//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let initialValue = {};
let cardBySuit = cardSuit.reduce((previousValue, card) => {
    if (card.cardSuit === 'spades') {
        previousValue.spades.push(card);
    }
    ;
    if (card.cardSuit === 'diamonds') {
        previousValue.diamonds.push(card);
    }
    ;
    if (card.cardSuit === 'hearts') {
        previousValue.hearts.push(card);
    }
    ;
    if (card.cardSuit === 'clubs') {
        previousValue.clubs.push(card);
    }
    ;
    return previousValue;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(cardBySuit);
