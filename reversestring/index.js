// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Reduce method untuk literate array menjadi single value dari kiri ke kanan dan dan append nilai return ke dalam variabel
  return str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
}

module.exports = reverse;

// First Solution
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// Second Solution
// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// Third Solution
// function reverse(str) {
//     // Reduce method untuk literate array menjadi single value dari kiri ke kanan dan dan append nilai return ke dalam variabel
//     return str.split("").reduce((rev, char) => {
//       return char + rev;
//     }, "");
//   }
