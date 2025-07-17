'use strict';

/*


Coding Challenge #2

This is more of a thinking challenge than a coding challenge �
Your tasks:

1. Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!

(function () {
 const header = document.querySelector('h1');
 header.style.color = 'red';
})();

2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.

*/

// ok looking at it this is an IIFE, obviously.
(function () {
  // This is the lexical scope of the IIFE function
  const header = document.querySelector('h1'); // all normal
  header.style.color = 'red'; // stablishing the initial color
  const body = document.querySelector('body'); // 1. I define the body as a constant
  let textIsRed = true; // couldn't resist Adding a toggle with a ternay operator
  body.addEventListener('click', function () {
    // Here I just appended the eventListener to the body. Even if it's an IIFE, the eventListener will remain appended to the body. This function is a callbakc because it is a function that is passed as an argument.
    textIsRed = !textIsRed; // It was really bothering me being stuck in one color.
    header.style.color = textIsRed ? 'Red' : 'blue'; // Aaand seems like it's also a closure, since it uses "header" which is a constant that was defined in the lexical scope.
  });
})();

// I also learned how proffesionals use self-docummenting code, and stick to Clean Code, I tought that philosophy had a more complicated name but it's not the case :P
