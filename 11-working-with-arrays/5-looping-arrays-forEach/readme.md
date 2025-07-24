## Looping arrays with forEach and starting to work in my bankist app

In this stage I will start working in the bankist app, while I **learn the content of the classes** in this one I'll learn about looping arrays with **forEach**

### I start by remembering the code for a simple for each loop where if the transaction is a deposit it days so in the console and tell you how much you deposited, same for withdraws.

```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
```

I write the for of loop

```javascript
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited $${movement} USD!`);
  } else {
    console.log(`you jsut withdraw $${Math.abs(movement)} USD!`);
  }
}
```

next I wrote it again with the use of the forEach

```javascript
movements.forEach(function (movement) {
  // The callback function begins
  if (movement > 0) {
    console.log(`You deposited $${movement} USD!`);
  } else {
    console.log(`you jsut withdraw $${Math.abs(movement)} USD!`);
  }
});
```

<font color="orange">In the for of loop</font>
We use entries() to get the index in a for of loop and to work with it.

<font color="orange">But in the .forEach method</font>
that's not needed

The fact that we use .foreach, makes it so that callback function can have this exact 3 parameters in this order.:

<font color="lightgreen">
#1

**The first parameter must be ALWAYS the current element, in this case "movement"**
</font>

<font color="lightgreen">
#2

**The second parameter always the current index**
</font>

<font color="lightgreen">
#3

**The third one the entire array we are looping over**
</font>

<font color="yellow">
The names doesn't really matter, just the order.
</font>

## IT IS THE .forEach that defines what parameters the callback function will be able to use.

so if we use a .forEach, this is a good example:

```javascript
movements.forEach(function (movement, i, array)) {
  if (movement > 0) {
    console.log(`Movement ${i+1}: You deposited $${movement} USD!`);
  } else {
    console.log(`Movement ${i+1}: $${Math.abs(movement)} USD!`);
  }
}

```
