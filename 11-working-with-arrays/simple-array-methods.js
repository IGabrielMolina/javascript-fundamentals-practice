'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// learning simple tools that we can use with arrays

// the slice method

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // PLaying with the slice method, can even take arr.length and expressions as a value
console.log(arr.slice(-1)); // 'e'
console.log(arr.slice(1, -1));
console.log(arr.slice()); // Shadow copy
// es lo mismo que esto:
console.log([...arr]);

// SPLICE: It actually changes the actual array
console.log(arr.splice(2));
// it does exactly the same as the slice method, but this method does it in a way that affects the original.

// REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // THE REVERSE method alters the original
console.log(arr2);

// CONCAT joins 2 arrays. It appends another array at the end of the one we are dealing with. we pass it the array we want to append. IT MUTATES THE ORIGINAL ARRAY
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'f', 'g', 'h', 'i', 'j']
// You can do it like this and it doesn't mutate any array at all
console.log([...arr, ...arr2]);

// JOIN just joins all the items inside an array and returns them as a string, joined by the passed character/s.
console.log(letters.join(' - '));

/////////////////////////////////////////////////
