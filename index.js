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

