///////////////////// 1. reverse String //////////////////////////
// function reverse(str){
//   return   str.split("").reverse().join('')

// }
// console.log(reverse("Balu"));
//--------------------------------------------------
// function reverse(str) {
//   res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res = res + str[i];
//   }
//   return res;
// }
// console.log(reverse("Balu"));
//-----------------------------------------------------
// function reverse(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     res = str[i] + res;
//   }
//   return res;
// }
// console.log(reverse("Balu"));
//--------------------------------------------------------
// function reverse(str) {
//   res = "";
//   str.split("").forEach((element) => {
//     res = element + res;
//   });
//   return res;
// }
// console.log(reverse("Balu"))
//--------------------- with recursion ------------------------
// function reversed(str){
//         if(str==""){
//             return str;
//         }
//         else{
//             return reversed(str.substr(1))+str[0]
//         }
//     }
//     console.log(reversed("balu"))
///////////////////// 2.String is palindrome or not //////////////////////////
// function palindrome(str){
//     let cleanedStr=str.replace(/[^A-Za-z0-9]/g,"").toLowerCase()
//     return cleanedStr === cleanedStr.split("").reverse().join("")
// }
// console.log(palindrome("A man, a plan, a canal, Panama")) // true
//-------------------------------------------------
// function palindrome(str) {
//   let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   return cleanedStr === cleanedStr.split("").reduce((acc, cur) => cur + acc);
// }
// console.log(palindrome("A man, a plan, a canal, Panama"));
//----------------------using two pointers----------------------
// function isPalindrome(str) {
//     let left = 0, right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("radar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
///////////////////// 3.find repeating and non-repeating char in string //////////////////////////
// function repeatingAndnonrepeating(str) {
//   let repeat = [];
//   let nonRepeat = [];

//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//       }
//     }
//     if (count > 1 && !repeat.includes(str[i])) {
//       repeat.push(str[i]);
//     } else if (count === 1) {
//       nonRepeat.push(str[i]);
//     }
//   }
//   return { repeat, nonRepeat };
// }

// console.log(repeatingAndnonrepeating("bbaaluu"));
///////////////////// 4.remove duplicates and display duplicates in a string ////////////////////////
// function repeatingAndnonrepeating(str) {
//   let repeat = [];
//   let nonRepeat = [];
//   for (let i = 0; i < str.length; i++) {
//     if(!repeat.includes(str[i])){
//         repeat.push(str[i])
//     }
//     else if(!nonRepeat.includes(str[i])){
//         nonRepeat.push(str[i])
//     }
//   }
//   return {repeat,nonRepeat}
// }
// console.log(repeatingAndnonrepeating("bbaaluu"));
//////////////////5. first non repeating character in a string ///////////////////////
// function repeatingAndnonrepeating(str) {
//   let repeat = [];
//   let nonRepeat = [];

//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//       }
//     }
//     if (count > 1 && !repeat.includes(str[i])) {
//       repeat.push(str[i]);
//     } else if (count === 1) {
//       nonRepeat.push(str[i]);
//     }
//   }
//   let firstNonRepeat = nonRepeat[0];
//   return { repeat, nonRepeat, firstNonRepeat };
// }

// console.log(repeatingAndnonrepeating("bbaaluukmn"));
//-----------------------------------------------------------
// function firstNonRepeat(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       res = str[i];
//     }
//   }
//   return res;
// }
// console.log(firstNonRepeat("baluuuaa"));
//----------------------------------------------------------
// function firstNonRepeatingChar(str) {
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       // Check if the character is unique
//       console.log("indexes",str.indexOf(char) )
//       console.log("last-indexes",str.lastIndexOf(char))
//       if (str.indexOf(char) === str.lastIndexOf(char)) {
//         return char; // Return the first non-repeating character
//       }
//     }
//     return null; // Return null if no non-repeating character is found
//   }
// console.log(firstNonRepeatingChar("balubaaa"))
//---------------------h.o.f (find method)-------------
// function firstNonRepeat(str) {
//   let arr = str.split("");
//   return arr.find(
//     (element) => arr.indexOf(element) === arr.lastIndexOf(element)
//   );
// }
// console.log(firstNonRepeat("baballuru"))
///////////////////////////////////////6. find num of vowels in a string ///////////////////////
// function vowels(str) {
//   let matches = str.match(/[aeiou]/g);
//   return matches ? matches.length : 0
// }
// console.log(vowels("hello world"))
//-------------------------------------------
// function countVowel(str){
//     let vowels="aeiou"
//     let count=0;
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)) count++
//     }
//     return count
// }
// console.log(countVowel("baluA"))
///////////////////////// 7. find longest word in a string /////////////////////////
// function longest(str) {
//   let arr = str.split(" ");
//   return arr.reduce((acc, cur) => cur.length > acc.length ? cur : acc,);

// }
// console.log(longest("I love programming"))
//---------------------------------------------------------------
// function longest(str) {
//   const words = str.split(" ");
//   let max = "";
//   for (let word of words) {
//     if (word.length > max.length) max = word;
//   }
//   return max
// }
// console.log(longest("my self Balu"))
///////////////////////// 8. find  Second longest word in a string /////////////////////////
// function secondLongestWord(str) {
//   let words = str.split(" ");
//   let longest = "";
//   let secondLongest = "";

//   for (let word of words) {
//     if (word.length > longest.length) {
//       secondLongest = longest;
//       longest = word;
//     } else if (word.length > secondLongest.length && word !== longest) {
//       secondLongest = word;
//     }
//   }

//   return secondLongest || null;
// }
// console.log(secondLongestWord("I love programming and problem solving")); // Output: "problem"
///////////////////////// 9. check two strings are Anagrams /////////////////////////
// function anagrams(str1, str2) {
//     console.log(str1.split("").sort())
//     console.log(str2.split("").sort())

//   const clearStr1 = str1.split("").sort().join("");
//   const clearStr2=str2.split("").sort().join("")
//   return clearStr1===clearStr2
// }
// console.log(anagrams("baluzx","lubaxz")) // output true
// console.log(anagrams("baluzx","lubaxzz")) // output false
//--------------------------------------------------------
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const count = {};
//     for (const char of str1) {
//         count[char] = (count[char] || 0) + 1;
//     }
//     for (const char of str2) {
//         if (!count[char]) return false;
//         count[char]--;
//     }
//     return true;
// }
// console.log(isAnagram("listen", "silent")); // Output: true
// console.log(isAnagram("hello", "world"));   // Output: false
///////////////////////// 10. find all permutations in a string /////////////////////////
// function getPermutations(str) {
//   if (str.length <= 1) {
//     return [str];
//   }

//   let permutations = [];
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     console.log("slc1",str.slice(0, i))
//     // console.log("slc2",str.slice( i+1))
//     const remainingChars = str.slice(0, i) + str.slice(i + 1);
//     const remainingPermutations = getPermutations(remainingChars);

//     for (let perm of remainingPermutations) {
//       permutations.push(char + perm);
//     }
//   }

//   return permutations;
// }

// console.log(getPermutations("abc")); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
//------------------------------------using reduce ---------------------------------
// function getPermutationsReduce(str) {
//     return str.split("").reduce((acc, char, i) => {
//       let newPermutations = [];
//       acc.forEach((perm) => {
//         for (let j = 0; j <= perm.length; j++) {
//           newPermutations.push(perm.slice(0, j) + char + perm.slice(j));
//         }
//       });
//       return newPermutations;
//     }, [""]);
//   }

//   // Example
//   console.log(getPermutationsReduce("abc"));
//   // Output: ['abc', 'bac', 'bca', 'acb', 'cab', 'cba']
//--------------------------------------------------
// function getPermutationsIterative(str) {
//     let result = [str[0]];

//     for (let i = 1; i < str.length; i++) {
//       let newResult = [];
//       for (let perm of result) {
//         for (let j = 0; j <= perm.length; j++) {
//           newResult.push(perm.slice(0, j) + str[i] + perm.slice(j));
//         }
//       }
//       result = newResult;
//     }

//     return result;
//   }

//   // Example
//   console.log(getPermutationsIterative("abc"));
//   // Output: ['abc', 'bac', 'bca', 'acb', 'cab', 'cba']

///////////////////////// 11. Capitalize first letter of each word /////////////////////////
// function Capitalize(str) {
//   let arr = str.split(" ");
//   console.log(arr)
//   return arr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
// }
// console.log(Capitalize("balu"))
// //--------------------------------------------------------------------
// function capitalizeWords(str) {
//     return str.split(" ").reduce((acc, word) => {
//       return acc + (acc ? " " : "") + word.charAt(0).toUpperCase() + word.slice(1);
//     }, "");
//   }

//   // Example
//   console.log(capitalizeWords("hello world from javascript"));
//   // Output: "Hello World From Javascript"
//------------------------ ---------------------
// function Capitalize(str) {
//   let arr = str.split(" ");
//   let arr2=[]
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     arr[i]=arr[i][0].toUpperCase() + arr[i].slice(1)
//   }
//   return arr.join(" ")
// }
// console.log(Capitalize("balu"))
////////////////////////////////// 12.Count the Frequency of Each Character in a String////////////////////////
// function charFrequency(str) {
//     const freq = {};
//     for (const char of str) {
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     return freq;
// }
// console.log(charFrequency("banana"));
// // Output: { b: 1, a: 3, n: 2 }
///--------------------------------------------
// function charFrequency(str) {
//     const freq = new Map();
//     for (const char of str) {
//         freq.set(char, (freq.get(char) || 0) + 1);
//     }
//     return Object.fromEntries(freq);
// }
// console.log(charFrequency("banana"));
// // Output: { b: 1, a: 3, n: 2 }
//-------------------------------------------
// function charFrequency(str) {
//   let frequency = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     console.log("char", char); //check char
//     console.log("frequency",frequency)
//     frequency[char] = (frequency[char] || 0) + 1;
//     console.log("frequency-char",frequency[char])
//   }
//   return frequency;
// }

// // Example
// console.log(charFrequency("hello world"));
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
//------------------------------------------------
// function charFrequency(str) {
//     let frequency = {};
//     for (const char of str) {
//       frequency[char] = (frequency[char] || 0) + 1;
//     }
//     return frequency;
//   }

//   // Example
//   console.log(charFrequency("hello world"));
//   // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
// //---------------------------------------------------
// function charFrequency(str) {
//     return str.split("").reduce((freq, char) => {
//       freq[char] = (freq[char] || 0) + 1;
//       return freq;
//     }, {});
//   }

//   // Example
//   console.log(charFrequency("hello world"));
//   // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
