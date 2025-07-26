<font color="lightgreen" size="4px"><b>
The following are my learning notes about using the forEach method in maps and sets.
</b></font>

---

Suppose we have this map::

```javascript
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
```

we use the .forEach method, we can pass it this 3 values, in this order:
<br><br>

> `(value, key, map)`

That is:

> 1st - **[the current value]**<br>
> 2nd - **[the current key]**<br>
> 3rd - **[and the map itself]**<br>

```javascript
/////////////////////////////////////////////////
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
```

This outputs the following:

![alt text](image.png)

A simple spell but quite unbreakable.

# in the case of Sets.

### it's funny: they wanted to make it the same as maps, so avoid confusion...

> function (value, key, map)

```javascript
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
```

you see?

> function (value, key, map)

So the function parameters structures demands a second value to be present... but... it's useless, in a set the "key" and the "value" are the same, so thats why if we console.log this:

> <p>[the key]: [the value]</p>

It'll output this:

> You get the following:

![](image-1.png)

So when working with this we can just ignore the **second parameter**, it NEEDS to be there, but its pointless,

An usual practice is to just pass an **\_** (Underscore) as the second parameter, and that's it.
