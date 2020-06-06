/*
reverse a string using recursion

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.



Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

const reverseStr = function (s, i, j) {
  if (i > j) return;
  let temp = s[i];
  s[i] = s[j];
  s[j] = temp;
  reverseStr(s, i + 1, j - 1);
};

const reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  reverseStr(s, i, j);
  return s;
};

//using while loop
const reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  return s;
};
