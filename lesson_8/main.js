// function User (name,age){
//     this.name = name;
//     this.age = age;
//     this.greeting = function (msg){
//         console.log(`${msg}, my name is ${this.name}`);
//     };
// };
// const user = new User('Inna', 39,);
// user.greeting('Hello');
//
// function SuperUser (name,age, password){
//     User.apply(this, arguments);
//     this.password = password;
// };
//
// const superUser = new SuperUser('Max', 44, 'uoi');
// superUser.greeting('Hi');
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

};
const user1 = new User(1, 'Inna', 'Yklghjh', 'inna@gmail.com', 80503674565);
const user2 = new User(2, 'Maks', 'Ahjjlkl;', 'max@gmail.com', 80503674565);
const user3 = new User(3, 'Nazar', 'Djkljffggh', 'nazar@gmail.com', 80503674565);
const user4 = new User(4, 'Bohdana', 'Vdsgdhj', 'bodya@gmail.com', 80503674565);
const user5 = new User(5, 'Larisa', 'Zdfdgdhdfj', 'lora@gmail.com', 80503674565);
const user6 = new User(6, 'Vova', 'Objkjhjhj', 'vovk@gmail.com', 80503674565);
const user7 = new User(7, 'Valya', 'Bjjjkjk', 'val@gmail.com', 80503674565);
const user8 = new User(8, 'Sasha', 'Qbhkjhk', 'shura@gmail.com', 80503674565);
const user9 = new User(9, 'Andriy', 'Dhjhkjhkj', 'bear@gmail.com', 80503674565);
const user10 = new User(10, 'Lilya', 'Ynbjkkkjkj', 'lili@gmail.com', 80503674565);

const array = [];

array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(array);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filterUsers = (arr) => arr.filter((value) => value.id % 2 === 0);
console.log(filterUsers(array));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortUsers = (arr) => arr.sort((a, b) => a.id - b.id);
console.log(sortUsers(array));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    };
};

const client1 = new Client(1, 'Inna', 'Yklghjh', 'inna@gmail.com', 80503674565, ['milk', 'bread', 'meet']);
const client2 = new Client(2, 'Max', 'Yklghjh', 'max@gmail.com', 80503674565, ['car', 'bajraktar', 'tank', 'himars']);
const client3 = new Client(3, 'Bodya', 'Yklghjh', 'bodya@gmail.com', 80503674565, ['pensils', 'book']);
const client4 = new Client(4, 'Nazar', 'Yklghjh', 'nazar@gmail.com', 80503674565, ['toys', 'water', 'ananas', 'applea', 'swits']);
const client5 = new Client(5, 'Lora', 'Yklghjh', 'lora@gmail.com', 80503674565, ['chiken', 'wine', 'meet', 'salt', 'kokos', 'shampoo']);
const client6 = new Client(6, 'Vova', 'Yklghjh', 'vova@gmail.com', 80503674565, ['petrol']);
const client7 = new Client(7, 'Andriy', 'Yklghjh', 'andr@gmail.com', 80503674565, ['fish', 'beer', 'rom', 'chokolade']);
const client8 = new Client(8, 'Valya', 'Yklghjh', 'valya@gmail.com', 80503674565, ['water', 'icecream']);
const client9 = new Client(9, 'Masha', 'Yklghjh', 'masha@gmail.com', 80503674565, ['book', 'fruits', 'salate', 'potato', 'tomato', 'bread', 'milk']);
const client10 = new Client(10, 'Lili', 'Yklghjh', 'lili@gmail.com', 80503674565, ['phone', 'toys', 'ticket', 'jklo']);

const clients = [];
clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(clients);

const clientsSort = (arr) => arr.sort((a, b) => a.order.length - b.order.length);
console.log(clientsSort(clients));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine
};

Car.prototype.drive = function () {
    return `їдемо зі швидкістю ${this.maxSpeed} км на годину`;
};
const car = new Car('Golf', 'Volkswagen', 2020, 200, 1.8);
console.log(car.drive());

Car.prototype.info = function () {
    return `model - ${this.model}, producer - ${this.producer}, year - ${this.year}, max speed - ${this.maxSpeed}, volume of engine - ${this.engine}`
};
console.log(car.info());

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    return `new speed is ${this.maxSpeed + newSpeed} km`
};
console.log(car.increaseMaxSpeed(100));

Car.prototype.changeYear = function (newValue) {
    return `graduation year is  ${newValue}`
};
console.log(car.changeYear(2022));

Car.prototype.addDriver = function (driver) {
    return this.diver = driver
};
console.log(car.addDriver({name: 'Inna', age: 39}))

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        this.info = function () {
            console.log(`модель автомобіля - ${this.model}, виробник - ${this.producer},
         рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}км/год, об'єм двигуна - ${this.engine}.`)
        };
        this.increaseMaxSpeed = function (newSpeed){
            console.log(`нова швидкість - ${this.maxSpeed + newSpeed}км/год`)
        };
        this.changeYear = function (newValue){
            this.year = newValue;
            console.log(this.year)
        };
        this.addDriver = function (driver){
            this.driver = driver;
        };
    };
};
const car2 = new Car2('Astra', 'Opel', 2000, 200, 1.6);
console.log(car2);

car2.drive();
car2.info();
car2.increaseMaxSpeed(80);
car2.changeYear(2021);
car2.addDriver({name:'Max', experience: 20});
console.log(car2);

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
class Popelyshka {
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    };
};
 const popelyshkaArr = [];
 popelyshkaArr.push(
     new Popelyshka('Olya', 30, 36),
     new Popelyshka('Tanya', 15, 39),
     new Popelyshka('Sveta', 23, 40),
     new Popelyshka('Dasha', 67, 38),
     new Popelyshka('Marysya', 42, 39),
     new Popelyshka('Liza', 17, 36),
     new Popelyshka('Toma', 26, 41),
     new Popelyshka('Marina', 90, 38),
     new Popelyshka('Karina', 19, 36),
     new Popelyshka('Mila', 32, 37),
     );

 class Prince{
     constructor(name,age,shoes) {
         this.name = name;
         this.age = age;
         this.shoes = shoes;
     };
 };

 const prince = new Prince('Valera', 35, 37);
for (const popelyshka of popelyshkaArr) {
    if (popelyshka.footSize === prince.shoes){
        console.log(`З принцом ${prince.name} повинна бути попелюшка ${popelyshka.name}`)
    };
};

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const findPopelyshka = popelyshkaArr.find(value => value.footSize === prince.shoes);
console.log(findPopelyshka);