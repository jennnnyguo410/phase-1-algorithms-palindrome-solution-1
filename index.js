function reverseString(word) {
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  const reversedWord = reverseString(word)
  return word === reversedWord
}

/* 
 反转输入的string

 如果反转后的string和反转前的字符串相同
 返回true
 不然
 返回false
*/

/*
  Add written explanation of your solution here
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
