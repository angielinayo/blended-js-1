//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//якщо ділитися на 3 і на 5 повернути fizzbuzz

// function checkNumber (number) {
//     for (let i = 0; i <= 24; i += 1) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         }

//         else if (i % 5 === 0) {
//             console.log('buzz');
//         }

//         else if (i % 3 === 0) {
//             console.log('fizz');
//         }

//         else {
//             console.log(i);
//         }
//     }
// }

// checkNumber(24)

//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//Аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage(...array) {
//     let total = 0;
//     let count = 0;
//        for (let i = 0; i < array.length; i += 1) {
//         if(typeof array[i] !== 'number') {
//             continue;
//         }

//         total += array[i];
//         count += 1;
//        }

//     console.log((total / count).toFixed(2));
//     console.log(array);
// }

// calculateAverage(12, 18, 32);
// calculateAverage('a', 'b');

//це паліндром чи ні
//Де помити мопед
//І була пані на палубі

// function palindrome(string) {
//     const normalizedString = string.replaceAll(' ', '')
//     .toLowerCase();

//     console.log(normalizedString);

//     const reversedString = [...normalizedString].reverse().join('');

//     console.log(reversedString);

//     console.log(normalizedString === reversedString);
// }

// palindrome('І була пані на палубі');
// palindrome('Де помити мопед');

//нарцис

// const people = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
//     ];
//     //нарцис 'Jhon'

// const people1 = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
//     {
//         name: 'Eva',
//         know: [],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
//     ];
//     //немає нарциса'

// const people2 = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Eva'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
//     ];
//     //немає нарциса

// const people3 = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: ['Eva'],
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
//     ];

//     //немає нарциса'
//     //Нарциса знають всі, нарцис незнає нікого

// const isNarciss = (arr) => {
//     let candidate = '';
//     for(let person of arr) {
//         if(person.know.length === 0) {
//             candidate = person.name;
//         }
//     }

//     if(!candidate) {
//         console.log('немає нарциса');
//         return;
//     }

//     for(let person of arr) {
//         if(person.name === candidate) {
//             continue;
//         }
//         if(!person.know.includes(candidate)) {
//             console.log('немає нарциса');
//             return;
//         }
//     }
//     console.log(candidate);
// }
// isNarciss(people);
// isNarciss(people1);
// isNarciss(people2);
// isNarciss(people3);

//1. Напиши скрипт для об'єкта user,
//Послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить вміст об'єкта users у форматі
//ключ:значення використовуючи Object.keys() і for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
// };

// // user.mood = 'happy';
// // user.['mood'] = 'happy';
// const userMood = 'mood';
// user[userMood] = 'happy';

// // user.hobby = 'skydiving';
// // user.['hobby'] = 'skydiving';
// const userHobby = 'hobby';
// user[userHobby] = 'skydiving';

// // user.premium = 'false';
// // user.['premium'] = 'false';
// const userPremium = 'premium';
// user[userPremium] = 'false';

// const keys = Object.keys(user);
// for(const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// const a = {};
// user[a] = 'Pamaparam';

// const b = {};
// user[b] = 'qwewew';

// console.log(user);

//2. У нас є об'єкт, в якому зберігатимуться зарплати
//Нашої команди
//Напишіть код для сумування всіх зарплат і
//Збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };

// function salariesSum(salaries) {
//     const salariesValue = Object.values(salaries);
//     let sum = 0;
//     for(const salary of salariesValue) {
//         sum += salary;
//     }
//     console.log(sum);
// }

// salariesSum(salaries);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується 
до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/

// function multi(number) {
//     return number * 21;
// }

// function each(array, callback) {
//     let result = [];

//     for(let i = 0; i < array.length; i += 1) {
//        const number = callback(array[i]);
//        console.log(number);
//        result.push(number);
//     }
//         return result;
// }

// const numbers = [1, 3, 4, 5];

// // console.log(each(numbers, function(number) {return number * 21}));

// console.log(each(numbers, (number => number * 21)));

// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
// ];

// //Реалізувати фільтр за якістю amount і отримати
// // Тільки назва моделі
// const getAvailableCarNames = (vehicles, treshold) => {
//   // return vehicles.filter(vehicle => vehicle.amount > treshold)
//   // .map(vehicle => vehicle.model);
//   return vehicles
//     .filter(({ amount }) => amount > treshold)
//     .map(({ model }) => model);
// };
// //Отримати машини на розпродажі і сортувати за зменшенням ціни

// console.table(getAvailableCarNames(vehicles, 12));

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }
// const animal = {
//   eats: true,
// };

// }
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     // if (#price > MAX_PRICE) {
//     // 	continue;
//     if (newPrice <= Car.MAX_PRICE) {
//       return this.#price;
//     }
//   }

//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// class Car {
//   static #MAX_PRICE = 50000;

//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   constructor(AccessLevel) {
//     User.AccessLevel = AccessLevel;
//   }
// }

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']
