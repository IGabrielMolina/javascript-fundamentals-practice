'use strict';

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();
//that is really all
