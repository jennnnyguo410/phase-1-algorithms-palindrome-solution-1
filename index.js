function reverseString(word) {
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  const reversedWord = reverseString(word)
  return word === reversedWord
}

//可读性：代码清晰易懂，并使用命名良好的变量和辅助函数表达其意图
//性能：如前所述，它在时间和空间复杂度方面并不是最有效的，因为它涉及创建额外的数组和字符串

function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}
//可读性：一眼就能看出这个函数的作用更具挑战性，尤其是在没有注释的情况下
//性能：此代码在时间和空间复杂度方面更有效，因为它创建的新变量更少，并且仅迭代字符串的一半
/* 
iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true
*/

/*
  如果第一个字母与最后一个字母相同，第二个字母与倒数第二个字母相同 ，
  依此类推（直到单词的中间），该函数应返回 true。
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("jenny"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("leon"));
}

module.exports = isPalindrome;
