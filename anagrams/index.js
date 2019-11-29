// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  cleanStringA = cleanString(stringA);
  cleanStringB = cleanString(stringB);
  return cleanStringA == cleanStringB;
}

function cleanString(str) {
  return str
    .replace("/[^a-zA-Z]/g")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

/*
function anagrams(stringA, stringB) {
  var aCharMap = charMap(stringA);
  var bCharMap = charMap(stringB);
  // jika panjang karakter tidak sama otomatis false
  if (aCharMap.length != bCharMap.length) {
    return false;
  }

  // looping untuk membandingkan jumlah karakter setiap array map
  for (let char in aCharMap) { 
    // jika jumlah tidak sama maka otomatis false
    if (aCharMap[char] !== bCharMap[char]) { 
      return false;
    }
  }

  return true;
}

function charMap(str) {
  str.replace("/[^a-zA-Z]/g", "");
  const resultMap = {};
  for (let char of str) {
    if (resultMap[char]) {
      resultMap[char]++;
    } else {
      resultMap[char] = 1;
    }
  }

  return resultMap;
}
*/

module.exports = anagrams;
