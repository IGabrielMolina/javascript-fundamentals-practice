OK so ... movements.:

```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
```

I need to show only the deposits, not the withdrawals

for that I can use .filter

it filters the array given the condition I give to it.

I create a constant where I'll put the deposits, and then I declare thet it will contain the result of using the .filter method, and I use lit like this, I simply FILTER the movements:

```javascript
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
```

this method is a simple but an effective one.

![alt text](image-6.png)
