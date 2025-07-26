'use strict';

const data1 = {
  julia: [3, 5, 2, 12, 7],
  kate: [4, 1, 15, 8, 3],
};

const data2 = {
  julia: [9, 16, 6, 8, 3],
  kate: [10, 5, 6, 1, 4],
};

const checkDogs = function (dogsJulia, dogsKate) {
  const finalArray = dogsJulia.slice(1, -2).concat(dogsKate);
  console.log(finalArray);
  finalArray.forEach(function (dogAge, i) {
    if (dogAge < 3) {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    } else {
      console.log(`Dog number ${i + 1} is a ${dogAge} years old Adult`);
    }
  });
};

console.log(`-----Test with Data1:-----`);
checkDogs(data1.julia, data1.kate);

console.log(`-----Test with Data2:-----`);
checkDogs(data2.julia, data2.kate);
