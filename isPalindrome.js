const str = "Madam I'm, adam"

function isPalindrome(str) {
  let len = str.length
  let i, j
  let strLower = str.toLowerCase()

  let result = true
  for (i = 0, j = len - 1; i <= j; i++, j--) {
    if (!(strLower[i] >= 'a' && strLower[i] <= 'z')) {
      j++
      continue
    }
    if (!(strLower[j] >= 'a' && strLower[j] <= 'z')) {
      i--
      continue
    }
    if (strLower[i] !== strLower[j]) result = false
  }
  return result
}

console.log(isPalindrome(str))

// Second way
function isPalindromeTwo(str) {
  str = str.toLowerCase()
  let strArr = str.split('')
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let lettersArr = []

  strArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char)
  })

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true
  else return false
}

console.log(isPalindromeTwo(str))
