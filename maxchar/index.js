// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  // looping untuk memasukan character dan jumlah digunakan ke dalam object baru
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  let max = 0;
  let maxChar = "";
  // looping untuk mengecek array yang paling banyak digunakan
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// First Solution
// function maxChar(str) {
//   let maxUsed = 0;
//   let result = "";
//   for (character of str) {
//     let usedCount = 0;
//     for (character2 of str) {
//       if (character2 === character) {
//         usedCount++;
//       }
//     }

//     if (usedCount > maxUsed) {
//       maxUsed = usedCount;
//       result = character;
//     }
//   }

//   return result;
// }

// Second Solution
// function maxChar(str) {
//   const charMap = {};

//   // looping untuk memasukan character dan jumlah digunakan ke dalam object baru
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   let max = 0;
//   let maxChar = "";
//   // looping untuk mengecek array yang paling banyak digunakan
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }
