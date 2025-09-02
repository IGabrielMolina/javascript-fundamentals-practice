Just like map, it iterates over every element in the array, applying the callback function we pass to it, but reduce does this with the objective of turning all the array into a single value, processing the whole array with whatever funciton we pass as a callback

syntax:

```javascript
reduce(callback, initialValue);
```

at the same time the callback function can take the following values:

```javascript
callback(accumulator, currentValue, index, array);
```

so in example, if we need to calculate the balance of an account, we just use the reduce method to iterate over the "movements" array, while reducing their values to a single value by simply adding them up, which would give us the total current balance of the account. We do it like this:

```javascript
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
```

which is the same as the long way of doing it:

```javascript
const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur, 0;
});
```

The `(acc, cur, i, arr)` are the parameters we always pass to the reduce method, in that order.

the accumulator, the current value of that iteration, the index, and the whole aray itself.

This example is for one reduce method

```javascript
const calcDisplayBalance = movements.reduce(
  (prev, curr, i, arr) => prev + curr
);
```

Which is the same as the long form:

```javascript
const calcDisplayBalance = movements.reduce(function (prev, curr, i, arr) {
  return prev + curr;
});
```

or the one using for, which Im not gonna write here because at this point it's almost medieval.

## Maximum variable

```javascript
// Get the max

// We declare a constant to pout the reduce method in...
const max = movements.reduce((acc, mov) => {
  //
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
```
