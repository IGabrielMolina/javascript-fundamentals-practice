'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

displayMovements(account1.movements);

// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };

const calcDisplayBalance = movements.reduce(
  (prev, curr, i, arr) => prev + curr
);

// calcDisplayBalance(account1.movements);

const totalBalance = movements.reduce((acc, cur) => acc + cur, 0);

createUserNames(accounts);

// console.log(accounts);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// console.log(movements);
// console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);

/*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
LECTURES


// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


///////////////////////////////////////
// The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return Math.round(mov * eurToUsd);
});

// console.log(movements);
// console.log(movementsUSD);
// console.log('-------now with arrow function-------');

const arrowToUSD = movements.map(mov => Math.round(mov * eurToUsd));

// console.log(arrowToUSD);

const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

// console.log(movementsDescriptions);

// console.log(movements);
// console.log('');

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);

// console.log(balance);

// Get the max
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

// console.log(max);

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK �

*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const calcAverageHumanAge = ages => {
  const dogAgesInHumanAges = ages.map(currentage => {
    if (currentage <= 2) {
      return currentage * 2;
    } else {
      return 16 + currentage * 4;
    }
  });
  const finalDogAges = dogAgesInHumanAges.filter(age => {
    if (age < 18) {
    }
  });
};

/*-------------------------------------------------

// Calentamiento 1: El Transformador (.map())
Tenés una lista de puntajes de un juego. Si el puntaje es 50 o más, lo duplicás. Si es menor, lo dejás como está. Tenés que crear un nuevo array con los puntajes modificados.
*/

const puntajes = [25, 60, 10, 80, 45];
console.log('puntajes anteriores:');
console.log(puntajes);

// TU CÓDIGO ACÁ
// Pista: necesitás un .map() con un if/else (o un ternario) adentro que devuelva un valor.
const puntajesModificados = puntajes.map(current => {
  if (current >= 50) {
    return current * 2;
  } else {
    return current;
  }
});

console.log(puntajesModificados); // Debería dar [25, 120, 10, 160, 45]

/*----------------------------------------------------------
Calentamiento 2: El Patovica (.filter())

El Objetivo: De una lista de duraciones de videos (en minutos), querés quedarte solamente con los videos que son cortos (10 minutos o menos) para hacer un resumen.
*/

console.log('calentameinto 2');
const duraciones = [5, 12, 8, 25, 3, 10];

// TU CÓDIGO ACÁ
// Pista: necesitás un .filter() que devuelva 'true' solo para los números que cumplen la condición.
const videosCortos = duraciones.filter(function (value) {
  return value <= 10;
});

console.log(videosCortos); // Debería dar [5, 8, 3, 10]

/*------------------------------------------------------
3. El Método .reduce() (La Calculadora / El Acumulador)

El Objetivo:
Tenés una lista con las propinas que dejaron en varias mesas. Querés saber el promedio de propina que dejaron.

*/
const propinas = [100, 250, 50, 150];

// TU CÓDIGO ACÁ
// Pista: primero usá .reduce() para sumar todo. Después, dividí esa suma por la cantidad de elementos.
const promedioPropinas =
  propinas.reduce((acu, propiActual) => {
    return acu + propiActual;
  }) / propinas.length;

console.log(promedioPropinas); // Debería dar 137.5

/*--------------------------------------------------------------
Calentamiento Final: El Combo (Encadenamiento)

El Objetivo: Ahora juntamos todo. Tenés una lista de precios de productos en dólares. Querés hacer tres cosas, en orden:

Convertir todos los precios a pesos (multiplicando por 1000).

De esos precios en pesos, quedarte solo con los que son de más de 5000 pesos.

Calcular el promedio de esos productos caros.
*/

// console.log('Calentamiento final');

// const preciosDolar = [10, 4, 25, 8, 2];

// const promedioCarosEnPesos = preciosDolar
//   .map(precio => {
//     return precio * 1000;
//   })
//   .filter(preci => {
//     return preci > 5000;
//   })
//   .reduce((acu, curr, i, arrayCompleto) => {
//     if (i + 1 === arrayCompleto.length) {
//       return (acu + curr) / arrayCompleto.length;
//     } else {
//       return acu + curr;
//     }
//   });

// console.log(promedioCarosEnPesos);

// console.clear();
// // Debería dar 17500 ( (10000 + 25000 + 8000) / 3 ) -> Corrección: (10000 + 25000) / 2 = 17500

// const dogInHumanAges2 = dogAge => {
//   const averages = dogAge
//     .map(x => (x <= 2 ? x * 2 : 16 + x * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, act, i, arr) => acc + act / arr.length, 0);
//   return averages;
// };

// const setsPrueba = [
//   [5, 2, 4, 1, 15, 8, 3],
//   [16, 6, 10, 5, 6, 1, 4],
// ];

// for (const set of setsPrueba) {
//   const result = dogInHumanAges2(set);
//   console.log(`El promedio para el set ${set} es ${result}`);
// }

console.clear();

// class 17
// the reduce method returns the first item that matches criteria of the callback function

/*
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawal); //  -400
*/

// Filter method returns a new array, find returns only the element itseld and not an array.

console.clear();

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawal); //  -400

console.log(accounts);

console.clear();
