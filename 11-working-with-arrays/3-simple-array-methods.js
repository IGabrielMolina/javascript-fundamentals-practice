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
