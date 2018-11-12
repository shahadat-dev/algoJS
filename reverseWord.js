function reverseWord(word) {
  let revWord = ''
  let letters = word.split('')
  for (let i = letters.length - 1; i >= 0; i--) {
    revWord += letters[i]
  }
  return revWord
}

function reverseString(str) {
  let words = str.split(' ')
  console.log(words, words.length)
  let reverseStr = []
  words.forEach(word => {
    reverseStr.push(reverseWord(word))
  })

  return reverseStr.join(' ')
}

console.log(reverseString('This is a string.'))
console.log(reverseString('Coding Javascript'))
