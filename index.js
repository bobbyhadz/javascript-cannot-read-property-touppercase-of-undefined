// Cannot read properties of undefined (reading 'toUpperCase')

// EXAMPLE 1 - Initialize the value of the variable to an empty string

const myVar = undefined;

// ✅ Provide empty string fallback
const str = myVar || ''; // 👉️ ""

// ✅ Using ternary operator
const r1 = typeof str === 'string' ? str.toUpperCase() : '';
console.log(r1); // 👉️ ""

// ✅ Using optional chaining (?.)
const r2 = str?.toUpperCase() || '';
console.log(r2); // 👉️ ""

// ✅ Using if/else
if (typeof str === '') {
  const r3 = str.toUpperCase();
} else {
  console.log('str is not a string');
}

// ✅ Provide empty string fallback
const r4 = (str || '').toUpperCase();
console.log(r4); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 2 - Solving the error when working with arrays

// const arr = [];

// const result =
//   typeof arr?.[0] === 'string' ? arr[0].toUpperCase() : '';
// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Solving the error when working with classes

// class Person {
//   // ✅ Initialize to an empty string
//   last = '';

//   // ✅ Initialize from parameters
//   constructor(first) {
//     this.first = first;
//   }

//   upperFirst() {
//     return this.first.toUpperCase();
//   }

//   upperLast() {
//     return this.last.toUpperCase();
//   }
// }

// const p1 = new Person('Tom');
// console.log(p1.upperFirst());
// console.log(p1.upperLast());
