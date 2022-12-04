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



