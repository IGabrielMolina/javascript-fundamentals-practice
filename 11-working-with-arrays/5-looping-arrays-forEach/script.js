'use strict';

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited $${movement} USD!`);
  } else {
    console.log(`you jsut withdraw $${Math.abs(movement)} USD!`);
  }
}

console.log(`---------------for each----------------`);

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited $${movement} USD!`);
  } else {
    console.log(`you jsut withdraw $${Math.abs(movement)} USD!`);
  }
});

console.log(`---------------for each with index----------------`);
//
movements.forEach(function (mov, i, array) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited $${mov} USD!`);
  } else {
    console.log(`Movement ${i + 1}: you jsut withdraw $${Math.abs(mov)} USD!`);
  }
});
