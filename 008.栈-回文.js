let Stack = require('./006.栈Stack')

function getPalindrome(word) {
  let s = new Stack()
  for (let i = 0; i < word.length; i++) {
    s.push(word[i])
  }
  let palindrome = ''
  while (s.length()) {
    palindrome += s.pop()
  }
  return palindrome
}

console.log(getPalindrome('lian yong cheng'))

