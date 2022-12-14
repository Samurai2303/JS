// 1. Створити пустий масив та :

let a = [];

// //     a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 0; i < 50; i++) {
    a[i] = 10;
}

// //     b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 50; i < 100; i++) {
    a[i] = 9;
}

// //     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let i = 100; i < 120; i++) {
    a[i] = Math.round(Math.random() * 100);
}

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 120; i < 140; i++) {
    a[i] = Math.round(Math.random() * 724 + 8);
}
// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < a.length; i++) {
    if (i % 3 === 0) {
        console.log(a[i]);
    }
}

console.log('------------');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < a.length; i++) {
    if (i % 3 === 0 && a[i] % 2 === 0) {
        console.log(a[i]);
    }
}

console.log('------------');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let b = [];
let indexB = 0;
for (let i = 0; i < a.length; i++) {
    if (i % 3 === 0 && a[i] % 2 === 0) {
        b[indexB++] = a[i];
    }
}
console.log(b);

console.log('------------');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < a.length; i++) {
    if (a[i + 1] % 2 === 0) {
        console.log(a[i]);
    }
}

console.log('------------');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let purchase = [100, 250, 50, 168, 120, 345, 188];
let sumPurchase = 0;
for (let i = 0; i < purchase.length; i++) {
    sumPurchase += purchase[i];
}
let average = sumPurchase / purchase.length;
console.log(Math.round(average));

console.log('------------');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let c = [];
let d = [];
for (let i = 0; i < 10; i++) {
    c[i] = Math.round(Math.random() * 100);
    d[i] = c[i] * 5;
}

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let e = [232, 34, 2.22, 'first word', "second word", true, NaN, 56];
let f = [];
let indexF = 0;
for (let i = 0; i < e.length; i++) {
    if (typeof e[i] === "number") {
        f[indexF++] = e[i];
    }
}

// - Дано 2 масиви з рівною кількістю об'єктів.
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

let usersWithCities = [];
let indexUC = 0;


for (let i = 0; i < usersWithId.length; i++) {
    for (let b = 0; b < citiesWithId.length; b++) {
        if (usersWithId[i]["id"] === citiesWithId[b]["user_id"]) {
            usersWithCities[indexUC++] = {
                id: usersWithId[i]["id"],
                name: usersWithId[i]["name"],
                age: usersWithId[i]["age"],
                status: usersWithId[i]["status"],
                address: {
                    user_id: citiesWithId[b]["user_id"],
                    country: citiesWithId[b]["country"],
                    city: citiesWithId[b]["city"]
                }
            };

        }
    }
}

console.log(usersWithCities);


// for (let i = 0; i < usersWithId.length; i++) {
//     if (usersWithId[i]["id"] === citiesWithId[0]["user_id"]) {
//         usersWithCities[indexUC++] = {
//             id: usersWithId[i]["id"],
//             name: usersWithId[i]["name"],
//             age: usersWithId[i]["age"],
//             status: usersWithId[i]["status"],
//             address: {
//                 user_id: citiesWithId[0]["user_id"],
//                 country: citiesWithId[0]["country"],
//                 city: citiesWithId[0]["city"]
//             }
//         };
//     } else if (usersWithId[i]["id"] === citiesWithId[1]["user_id"]) {
//         usersWithCities[indexUC++] = {
//             id: usersWithId[i]["id"],
//             name: usersWithId[i]["name"],
//             age: usersWithId[i]["age"],
//             status: usersWithId[i]["status"],
//             address: {
//                 user_id: citiesWithId[1]["user_id"],
//                 country: citiesWithId[1]["country"],
//                 city: citiesWithId[1]["city"]
//             }
//         };
//     } else if (usersWithId[i]["id"] === citiesWithId[2]["user_id"]) {
//         usersWithCities[indexUC++] = {
//             id: usersWithId[i]["id"],
//             name: usersWithId[i]["name"],
//             age: usersWithId[i]["age"],
//             status: usersWithId[i]["status"],
//             address: {
//                 user_id: citiesWithId[2]["user_id"],
//                 country: citiesWithId[2]["country"],
//                 city: citiesWithId[2]["city"]
//             }
//         };
//     } else if (usersWithId[i]["id"] === citiesWithId[3]["user_id"]) {
//         usersWithCities[indexUC++] = {
//             id: usersWithId[i]["id"],
//             name: usersWithId[i]["name"],
//             age: usersWithId[i]["age"],
//             status: usersWithId[i]["status"],
//             address: {
//                 user_id: citiesWithId[3]["user_id"],
//                 country: citiesWithId[3]["country"],
//                 city: citiesWithId[3]["city"]
//             }
//         };
//     }
// }


console.log('------------');


//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

for (let i of c) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log('------------');

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let g = [];
for (let i = 0; i < c.length; i++) {
    g[i] = c[i];
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let abc = ['a', 'b', 'c'];

let empty1abc = [];
for (let i = 0; i < abc.length; i++) {
    empty1abc += abc[i];
}
console.log(empty1abc);

console.log('------------');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let empty2abc = [];
let i1 = 0;
while (i1 < abc.length) {
    empty2abc += abc[i1];
    i1++;
}
console.log(empty2abc);

console.log('------------');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let empty3abc = [];
for (let i of abc) {
    empty3abc += i;
}
console.log(empty3abc);
