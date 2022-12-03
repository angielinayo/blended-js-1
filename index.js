//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//якщо ділитися на 3 і на 5 повернути fizzbuzz

function checkNumber (number) {
    for (let i = 0; i <= 24; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }

        else if (i % 5 === 0) {
            console.log('buzz');
        }

        else if (i % 3 === 0) {
            console.log('fizz');
        }

        else {
            console.log(i);
        }
    }
}

checkNumber(24)