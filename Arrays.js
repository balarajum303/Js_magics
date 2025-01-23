////////////////////////1. find largest number in Array ////////////////////////
// function largest(arr) {
//   return Math.max(...arr);
// }
// console.log(largest([1, 2, 23, 3]));
//--------------------------------------------------------
// function largest(arr){
//     return arr.sort((a,b)=>b-a)[0]
// }
// console.log(largest([1,12,1,23,123,402]))
//--------------------------------------
// function largest(arr) {
//   let max = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// console.log(largest([1,14,143,2,3,4,5,6,7,8]))
//-----------------------------------------------------
// function largest(arr) {
//   return arr.reduce((acc, cur) => (acc > cur ? acc : cur));
// }
// console.log(largest([1,14,143,2,3,4,5,6,7,8]))
///////////////////////2. find second largest num in array /////////////
// function secondLarge(arr) {
//   if (arr.length < 2) return null;
//   const sorted = [...new Set(arr)].sort((a, b) => b - a);
//   return sorted[1];
// }
// console.log(secondLarge([1,2,4,8,2,1,3,1,123]))
//--------------------------------------------------------
// function secondLarge(arr){
//     if (arr.length<2) return null
//     let max = Math.max(...arr)
//     let filtered= arr.filter(num=>num!=max)
//     console.log(filtered)
//     return Math.max(...filtered)
// }
// console.log(secondLarge([1,3,2,4,32,12,5,8]))
//---------------------------------------------------------
// function secondLarge(arr) {
//   if (arr.length < 2) {
//     return "Array must have at least two distinct elements.";
//   }
//   let max = arr[0];
//   let secondMax = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       secondMax = max; ////here update secondMax before updating max
//       max = arr[i];
//     } else if (arr[i] > secondMax && arr[i] !== max) {
//       secondMax = arr[i];
//     }
//   }
//   return { max, secondMax };
// }
// console.log(secondLarge([1, 2, 3, 123, 12, 13, 32, 4, 5, 6, 7, 8]));
// console.log(secondLarge([1, 1, 1, 1]));
//------------------------------------------
// function secondLarge(arr) {
//   let max = arr.reduce((acc, cur) => (cur > acc ? cur : acc));
//   let secondMax = arr.reduce((acc, cur) => cur < max && cur > acc ? cur : acc);
//   return {max,secondMax}
// }
// console.log(secondLarge([1,2,12,123,3,4,5,6,7,8]))
//----------------------------------------------
// function secondLargest(arr) {
//     return arr.reduce(
//       ([max, secondMax], num) => {
//         if (num > max) {
//           return [num, max];
//         } else if (num > secondMax && num < max) {
//           return [max, num];
//         }
//         return [max, secondMax];
//       },
//       [-Infinity, -Infinity]
//     )[1]; // Return secondMax
//   }

//   console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
//   console.log(secondLargest([10, 10, 5]));    // Output: 5
/////////////////////// 3. Ascendiing and descending order in array /////////////
//--------Ascending order ----
// let arr = [3, 4, 5, 9, 1, 0];
// arr.sort((a, b) => a - b);
// console.log(arr); //[ 0, 1, 3, 4, 5, 9 ]
// //---------Descending order ----
// let desArr = [9, 8, 3, 2, 0];
// arr.sort((a, b) => b - a);
// console.log(arr); //[ 9, 5, 4, 3, 1, 0 ]
//-------------------------------------------------------------------------
// const arr = ["5", "3", "8", "1", "2"];
// arr.sort((a, b) => Number(a) - Number(b));
// console.log(arr); // Output: [1, 2, 3, 5, 8]
// const arr2 = ["5", "3", "8", "1", "2"];
// arr2.sort((a, b) => Number(b) - Number(a));
// console.log(arr2); // Output: [8, 5, 3, 2, 1]
//--------------------------------------------------------------------------
//------------Bubble Sort (Ascending)---------------
// function bubbleSortAsc(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }
//   console.log(bubbleSortAsc([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]
//   //---------------Bubble Sort (Descending) ---------------
//   function bubbleSortDesc(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }
//   console.log(bubbleSortDesc([5, 3, 8, 1, 2])); // Output: [8, 5, 3, 2, 1]
//-------------------------------------------------------------------------------
///ascending
// function sortAsc(arr) {
//   let res = [];
//   while (arr.length) {
//     let min = Math.min(...arr);
//     console.log(min);
//     res.push(min);
//     arr = arr.filter((num) => num !== min);
//   }
//   return res;
// }
// console.log(sortAsc([4, 5, 2, 1, 3, 8, 6, 0]));
// ///descending///
// function sortDesc(arr) {
//   let res = [];
//   while (arr.length) {
//     let max = Math.max(...arr);
//     res.push(max);
//     arr = arr.filter((num) => num != max);
//   }
//   return res;
// }
// console.log(sortDesc([3,68,6,2,8,4,5,0]))
//------------------------------
// ///ascending
// function sortAsc(arr) {
//   let res = [];
//   for (let i = 0; arr.length > 0; i++) {
//     let min = Math.min(...arr);
//     res.push(min);
//     arr = arr.filter((num) => num != min);
//   }
//   return res;
// }
// console.log(sortAsc([5, 6, 1, 1, 12, 123, 4, 5, 6, 7, 8]));
// ///descending
// function sortDesc(arr) {
//   let res = [];
//   for (let i = 0; arr.length > 0; i++) {
//     let max = Math.max(...arr);
//     res.push(max);
//     arr = arr.filter((num) => num != max);
//   }
//   return res;
// }
// console.log(sortDesc([2, 1, 3, 12, 4, 5, 8, 5, 9, 0]));
/////////////////////// 4. Remove duplicates from array /////////////
// function removeDup(arr){
//     return [...new Set(arr)]
// }
// console.log(removeDup([1,2,1,3,2,2,1,3,3,4,5,6,5,4,6]))
//---------------------------------------------------
// function removeDup(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDup([1,2,1,3,2,2,1,3,3,4,5,6,5,4,6]))
//-----------------------------------------------------
// const arr = [1, 2, 2, 3, 4, 4, 5];
// const unique = arr.filter((item, index) => arr.findIndex(el => el === item) === index);
// console.log(unique); // Output: [1, 2, 3, 4, 5]
//---------------------------------------------------
// function removeDup(arr) {
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }
// console.log(removeDup([1, 2, 1, 3, 2, 2, 1, 3, 3, 4, 5, 6, 5, 4, 6]));
//------------------------------------------------
// function removeDup(arr) {
//   arr.sort((a, b) => a - b);
//   let unique = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }
// console.log(removeDup([1, 2, 1, 3, 2, 2, 1, 3, 3, 4, 5, 6, 5, 4, 6]));
//-------------------------------
// function removeDup(arr) {
//    return arr.reduce((acc, cur) => {
//     console.log(acc, "acc");
//     if (!acc.includes(cur)) acc.push(cur);
//     return acc
//   },[]);

// }
// console.log(removeDup([1, 2, 1, 3, 2, 2, 1, 3, 3, 4, 5, 6, 5, 4, 6]))
/////////////////////// 5. display repeating and non-repeating elements in array /////////////
// function repNonRep(arr) {
//   let noRepeat = arr.filter(
//     (item, index) => arr.indexOf(item) === arr.lastIndexOf(item)
//   );
//   const repeatData = arr.filter(
//     (item, index) => arr.indexOf(item) !== arr.lastIndexOf(item)
//   );
//   const repeat = [...new Set(repeatData)];
//   return { repeat, noRepeat };
// }
// console.log(repNonRep([1, 2, 3, 2, 1, 3, 4, 5, 6, 7, 5, 4, 6, 7, 8]));
//---------------------------------------------
// function repNonRep(arr) {
//   let repeat = [];
//   let nonRepeat = [];

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > 1 && !repeat.includes(arr[i])) {
//       repeat.push(arr[i]);
//     } else if (count === 1) {
//       nonRepeat.push(arr[i]);
//     }
//   }
//   return { repeat, nonRepeat };
// }
// console.log(repNonRep([1, 2, 3, 4, 12, 1, 2, 3, 4]));
/////////////////////// 6. Sum Of all numbers in array /////////////
// function sum(arr){
//     return arr.reduce((acc,cur)=>cur+acc)
// }
// console.log(sum([1,2,3]))
//------------------------------
// function sumArray(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res = res + arr[i];
//   }
//   return res;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));
//------------------------
// function sumArray(arr) {
//   console.log(arr.slice(1)); //[2,3]
//   if (arr.length === 0) return 0;
//   return arr[0] + sumArray(arr.slice(1));
// }

// console.log(sumArray([1, 2, 3]));
///////////////////7. Flatten a Nested Array /////////////////////
// function flatArr(arr){
//     return arr.flat()
// }
// console.log(flatArr([1,[2,3],[4,5]])) //[ 1, 2, 3, 4, 5 ]
// console.log(flatArr([1,[2,3],[4,[5,[6,7]]]])) //[ 1, 2, 3, 4, [ 5, [ 6, 7 ] ] ]
//----------------------------------------
// function flattenArray(arr) {
//     const result = [];
//     for (const val of arr) {
//       if (Array.isArray(val)) {
//         result.push(...flattenArray(val)); // Recursively flatten
//       } else {
//         result.push(val);
//       }
//     }
//     return result;
//   }

//   console.log(flattenArray([1,2,[3,4],[5,[6,7]]])); // Output: [1, 2, 3, 4, 5, 6,7]
////////////////8.Check if an Array is a Subset of Another //////////////
// function isSubset(arr1, arr2) {
//   return arr2.every((val) => arr1.includes(val));
// }
// console.log(isSubset([1, 2, 3, 4, 5], [2, 3])); // Output: true
// console.log(isSubset([1, 2, 3, 4, 5], [6])); // Output: false
//--------------------------------------------------
// function isSubset(arr1, arr2) {
//     for (let val of arr2) {
//         if (!arr1.includes(val)) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isSubset([1, 2, 3, 4, 5], [2, 3])); // Output: true
// console.log(isSubset([1, 2, 3, 4, 5], [6])); // Output: false
////////////////9.Reverse Elements in Array //////////////
// function reverse(arr){
// return arr.reverse()
// }
// console.log(reverse([1,2,3]))
// -------------------------------------------------------------------
// function reverese(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res = arr[i] + res;
//   }
//   return res;
// }
// console.log(reverese([1, 2, 3]));
// -------------------------------------------------------------------
// function reverese(arr) {
//   let res = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     res = res + arr[i];
//   }
//   return res
// }
// console.log(reverese([1, 2, 3]));
// -------------------------------------------------------------------
// function reverese(arr) {
//   let res = [];
//   arr.forEach((element) => {
//     res = element + res;
//   });
//   return res;
// }
// console.log(reverese([1, 2, 3]));
// -------------------------------------------------------------------
// function reverseArray(arr) {
//   let res = [];
//   for (let num of arr) {
//     res.unshift(num);
//     // res = num + res;
//   }
//   return res;
// }

// console.log(reverseArray([1, 2, 3]));
///////////////////////////////// 10. Count Occurance Of  Single Element in Array /////////////////
// function Occurance(arr, value) {
//   return arr.filter((item) => item === value).length;
// }
// console.log(Occurance([1, 1, 1, 2, 3, 2, 3, 2, 1, 1], 1));
//------------------------------------------------
// function Occurance(arr, value) {
//   return arr.reduce((acc, cur) => (cur === value ? acc + 1 : acc));
// }
// console.log(Occurance([1, 2, 3, 1, 2, 3, 1, 2, 3], 1));
//--------------------------------------------------
// function Occurance(arr, value) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(Occurance([1, 22, 1, 2, 1, 2, 3], 1));
//--------------------------------------------
// function Occurance(arr, value) {
//   let Count = 0;
//   for (let num of arr) {
//     if (num === value) {
//       Count++;
//     }
//   }
//   return Count;
// }
// console.log(Occurance([1, 1, 1, 2, 3, 2, 3, 2, 1, 1], 1));
// -------------------------------------------------------------------
// function Occurance(arr, value) {
//   let Count = 0;
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] === value) {
//       Count++;
//     }
//     i++;
//   }
//   return Count;
// }
// console.log(Occurance([1, 1, 1, 2, 3, 2, 3, 2, 1, 1], 1));
///////////////////////////////// 11. Count Occurance Of  Each Element in Array /////////////////
// function Occurance(arr) {
//   let count = {};
//   for (num of arr) {
//     count[num] = (count[num] || 0) + 1;
//     console.log(count[num])
//   }
//   return count
// }
// console.log(Occurance([1,2,3,2,3]))
/////////////12. reverse Array //////////////////
// function reverseArr1(arr){
//   return arr.reverse()
// }console.log(reverseArr1([1,2,3]))
//-------------------------------
// function reverseArr2(arr) {
//   return arr.reduce((acc, cur) => [cur, ...acc],[]);
// }
// console.log(reverseArr2([1, 2, 3]));
//-----------------------------------
// function reverseArr3(arr) {
//   let res = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     res.push(arr[i]);
//   }
//   return res;
// }
// console.log(reverseArr3([1, 2, 3]));
//////////////13. find missing num in array///////////
// function missingNum(arr) {
//   let n = arr.length + 1; //{n is length of array including missing element}
//   let totalSum = (n * (n + 1)) / 2;
//   let curSum = arr.reduce((acc, cur) => acc + cur);
//   return totalSum - curSum;
// }
// console.log(missingNum([1, 3, 4]));
//----------------------------------------
// function missingNum2(arr) {
//   let res = 0;
//   let n = arr.length + 1;
//   let set = new Set(arr);
//   for (let i = 1; i <= n; i++) {
//     if (!set.has(i)) {
//       res = i;
//     }
//   }
//   return res;
// }
// console.log(missingNum2([1, 2, 4, 5]));
////////////////////////////////14.Move All Zeros to the End of an Array/////////////////////
// const arr = [0, 1, 2, 0, 0, 3, 0, 20, 0, 2, 0];
// const res = [
//   ...arr.filter((num) => num !== 0),
//   ...arr.filter((num) => num === 0),
// ];
// console.log(res);
//---------------------------------------
// function moveZerosToEnd(arr) {
//   let index = 0; // Pointer for the next non-zero position
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== 0) {
//           arr[index] = arr[i]; // Place non-zero element at the 'index' position
//           if (index !== i) arr[i] = 0; // Set the current position to 0
//           index++;
//       }
//   }
//   return arr;
// }

// console.log(moveZerosToEnd([0, 1, 2, 0, 3, 4, 0])); // [1, 2, 3, 4, 0, 0, 0]
///////////////////////////15. Find the Pair with the Maximum Sum in an Array////////////////////////
// function pairSum(arr) {
//   arr.sort((a, b) => b - a);
//   console.log(arr);
//   let data = [arr[0], arr[1]];
//   return data;
// }
// console.log(pairSum([1, 23, 3, 1, 2, 35, 6]));
//---------------------------------------
// function pairSum(arr) {
//   let maxSum = -Infinity;
//   let pair = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let sum = arr[i] + arr[j];
//       if (sum > maxSum) {
//         maxSum = sum;
//         pair = [arr[i], arr[j]];
//       }
//     }
//   }
//   return pair;
// }
// console.log(pairSum([1, 2, 3, 2, 23, 4, 2, 7, 8, 9, 33]));
//-----------------------------------
// function pairSum(arr) {
//   let max1 = -Infinity;
//   let max2 = -Infinity;
//   for (let num of arr) {
//     if (num > max1) {
//       max2 = max1;
//       max1 = num;
//     } else if (num > max2) {
//       max2 = num;
//     }
//   }
//   return [max1, max2];
// }
// console.log(pairSum([1, 2, 3, 4, 2, 3, 23, 4, 5, 6, 33]));
/////////////////////////////16 Generate All Permutations of an Array  //////////////////////
// function getPermutations(arr) {
//   let res = [];
//   function permute(current, remaining) {
//     if (remaining.length === 0) {
//       res.push(current);
//     }
//     for (let i = 0; i < remaining.length; i++) {
//       let newCurrent = [...current, remaining[i]];
//       let newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
//       permute(newCurrent, newRemaining);
//     }
//   }
//   permute([], arr);
//   return res;
// }
// console.log(getPermutations([1, 2, 3]));
/////////////////////17. Find the Longest Consecutive Sequence ////////////////////
// function longestConsecutive(nums) {
//   if (nums.length === 0) return 0;
//   nums.sort((a, b) => a - b);
//   let currentStreak = 1;
//   let longestStreak = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       if (nums[i] === nums[i - 1] + 1) {
//         currentStreak++;
//       } else {
//         longestStreak = Math.max(longestStreak, currentStreak);
//         currentStreak = 1;
//       }
//     }
//   }
//   return Math.max(longestStreak, currentStreak);
// }
// console.log(longestConsecutive([4, 2, 3, 1, 200, 100]));
///------------------------------------------------------------------
// function longestConsecutive(nums) {
//   const numSet = new Set(nums); // Create a set for quick lookup
//   let longest = 0;

//   for (let num of nums) {
//       // Only check the start of a sequence
//       if (!numSet.has(num - 1)) {
//           let currentNum = num;
//           let currentStreak = 1;

//           // Count the length of the sequence
//           while (numSet.has(currentNum + 1)) {
//               currentNum++;
//               currentStreak++;
//           }

//           longest = Math.max(longest, currentStreak); // Update longest streak
//       }
//   }

//   return longest;
// }

// // Test
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4

/////////////////////////18. Find the Product of All Elements Except Self////////////////////
// let arr = [1, 2, 3];
// let totalProduct = arr.reduce((acc, cur) => acc * cur);
// let result = arr.map((num) => totalProduct / num);
// console.log(result)
//----------------------------------------------------
// function productExceptSelf(nums) {
//   const result = [];
//   let totalProduct = 1;

//   // Calculate the product of all elements
//   for (let i = 0; i < nums.length; i++) {
//     totalProduct *= nums[i];
//   }

//   // Divide the total product by each element to get the result
//   for (let i = 0; i < nums.length; i++) {
//     result[i] = totalProduct / nums[i];
//   }

//   return result;
// }

// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
//--------------------------------------------------
// function productExceptSelf(nums) {
//   const result = [];
//   let left = 1, right = 1;

//   // First pass: Calculate the left products
//   for (let i = 0; i < nums.length; i++) {
//     result[i] = left;   // Store the product of all elements to the left of `nums[i]`
//     left *= nums[i];    // Update `left` to include the current element
//   }

//   // Second pass: Calculate the right products and multiply with left products
//   for (let i = nums.length - 1; i >= 0; i--) {
//     result[i] *= right; // Multiply the current result with the product of all elements to the right
//     right *= nums[i];   // Update `right` to include the current element
//   }

//   return result;
// }

// console.log(productExceptSelf([1, 2, 3, 4])); // Expected Output: [24, 12, 8, 6]
//---------------------------------------------



