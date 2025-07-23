'use strict';

// getting last array element
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
//
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // IF you need to start counting from the end of an array. You shoudl probably use the .at method. Also, if ou wanna do something called method chaining (next lecture is about that)
// If you want a quick value from an array just use the square brackets [0]

//oh it also works on strings
console.log('jonas'.at(-1)); // s
