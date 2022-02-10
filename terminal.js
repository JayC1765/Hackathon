const codingQuestions = [`// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
return union([arr1, arr2, arr3]) //-> should log: [5, 10, 15, 88, 1, 7, 100]`,
  `// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
return objOfMatches(arr1, arr2, uppercaser); //-> should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }`,
  `// Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired return s. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.

function arrToObj(array, callback) {
  // ADD CODE HERE
}

const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
return arrToObj(arrOfStrings, capitalize); //-> should log: { beer: 'BEER', glue: 'GLUE' }`,
  `// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

const isOdd = function(num) { return num % 2 === 1; };
return majority([1, 2, 3, 4, 5], isOdd); //-> should log: true
return majority([2, 3, 4, 5], isOdd); //-> should log: false`,
  `// Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
return prioritize(tvShows, startsWithS); //-> should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']`,
  `// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
return groupBy(decimals, floored); //-> should log: { 1: [1.3], 2: [2.1, 2.4] }`,
  `// Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
return goodKeys(sunny, startsWithBird); //-> should log: ['charlie', 'dee']`,
  `// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
return getDay(); //-> should log: 'Fri'
return getDay(); //-> should log: 'Sat'
return getDay(); //-> should log: 'Sun'
return getDay(); //-> should log: 'Fri'`,
  `// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
return changeScene('The quick, brown fox jumps over the lazy dogs.'); //-> should log: 'The slow, brown fox jumps over the lazy cats.'`,
  `// Get the length of an array using recursion without accessing its length property.

return getLength([1]); //-> 1
return getLength([1, 2]); //-> 2
return getLength([1, 2, 3, 4, 5]); //-> 5
return getLength([]); //-> 0`,
  `// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

function pow(base, exponent) {

}

return pow(2, 4); //-> 16
return pow(3, 5); //-> 243`,
];

document.addEventListener('DOMContentLoaded', () => {
  const terminalContainer = document.querySelector('form');
  const terminal = document.querySelector('#terminal');
  terminal.value = codingQuestions[Math.floor(Math.random() * codingQuestions.length)];
  terminalContainer.addEventListener('reset', (event) => {
    event.preventDefault();
    terminal.value = codingQuestions[Math.floor(Math.random() * codingQuestions.length)];
    document.querySelector('#console').value = '';
  });
  terminalContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    const code = terminal.value;
    document.querySelector('#console').value = JSON.stringify(Function(code)());
    if (document.querySelector('#console').value === '55') {
      window.location.href = './unit-4-snake/index.html';
    }
  });
});
