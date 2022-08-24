// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

const htmlDivElement = document.createElement('div');
document.body.appendChild(htmlDivElement);

for (const simpson of simpsons) {
    const divSimpson = document.createElement('div');
    divSimpson.classList.add('member');
    htmlDivElement.appendChild(divSimpson);

    const h2 = document.createElement('h2');
    h2.innerText = `${simpson.name} ${simpson.surname}, age - ${simpson.age}`;
    divSimpson.appendChild(h2);

    const info = document.createElement('p');
    info.innerText = `${simpson.info}`;
    divSimpson.appendChild(info);

    const img = document.createElement('img');
    img.src = `${simpson.photo}`;
    divSimpson.appendChild(img);
}
;


//
// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
for (const course of coursesArray) {
    const divCourse = document.createElement('div');
    divCourse.classList.add('course');

    let divTittle = document.createElement('h2');
    divTittle.innerText = `${course.title}`;
    divTittle.classList.add('title');

    let divDuration = document.createElement('div');
    divDuration.classList.add('duration');

    let month = document.createElement('h3');
    month.innerText = `Duration - ${course.monthDuration} month.`;

    let hour = document.createElement('h3');
    hour.innerText = `Duration - ${course.hourDuration} hour.`;

    let modulesList = document.createElement('ul');
    modulesList.classList.add('modules');

    for (const item of course.modules) {
        let module = document.createElement('li');
        module.innerText = item;
        modulesList.appendChild(module);
    }

    document.body.appendChild(divCourse);
    divCourse.appendChild(divTittle);
    divCourse.appendChild(divDuration);
    divDuration.appendChild(month);
    divDuration.appendChild(hour);
    divCourse.appendChild(modulesList);
}
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
const p = document.createElement('p');
p.innerText = 'There is a block'
block.appendChild(p);
document.body.appendChild(block);
const node = block.cloneNode(true);
document.body.appendChild(node);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let array = ['Main', 'Products', 'About us', 'Contacts'];
const menu = document.getElementsByClassName('menu')[0];
for (const item of array) {
    const li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}
;


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const coursesAndDuration = document.createElement('div');
document.body.appendChild(coursesAndDuration);
for (const item of coursesAndDurationArray) {
    const course = document.createElement('div');
    course.classList.add('item');
    coursesAndDuration.appendChild(course);

    for (const key in item) {
        const tittle = document.createElement('h1');
        tittle.classList.add('heading');
        const monthDuration = document.createElement('p');
        monthDuration.classList.add('description');
        tittle.innerText = item.title;
        monthDuration.innerText = item.monthDuration;
        course.appendChild(tittle);
        course.appendChild(monthDuration);
    }
    ;
}
;

// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const text = document.createElement('p');
text.setAttribute('id', 'text');
text.classList.add('hidden');
text.innerText = 'Hello everybody!';
document.body.appendChild(text);

const button = document.createElement('button');
button.innerText = 'click me';
document.body.appendChild(button);

button.onclick = () => {
    text.classList.toggle('hidden');
};

//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік, чи менше він ніж 18, та повідомити про це користувача
const input = document.createElement('input');
input.type = 'number';

const button1 = document.createElement('button');
button1.innerText = 'save';

document.body.appendChild(input);
document.body.appendChild(button1);

button1.onclick = () => {
    let age = input.value;

    if (age > 0 && age < 18) {
        alert('you are too young')
    } else if (age > 18) {
        alert('you are welcome!')
    } else {
        alert('error')
    }
}
//
// *** Створити 3 iнпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const rows = document.createElement('input');
const cells = document.createElement('input');
const data = document.createElement('input');
data.setAttribute('placeholder', 'enter your name')
const createTable = document.createElement('button');

rows.type = 'number';
cells.type = 'number';
data.type = 'text';
createTable.innerText = 'create table';

document.body.append(rows, cells, data, createTable);

createTable.addEventListener('click', function () {
    let row = rows.value;
    let cell = cells.value;
    let information = data.value;

    let generator = (tr, td, text) => {
        const table = document.createElement('table');
        document.body.appendChild(table);

        for (let i = 0; i < tr; i++) {
            const tr = document.createElement('tr');
            table.appendChild(tr);

            for (let j = 0; j < td; j++) {
                const td = document.createElement('td');
                td.innerText = `${text}`;
                tr.appendChild(td);
            };
        };
    };
    generator(row, cell, information)
});