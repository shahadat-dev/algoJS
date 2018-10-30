function caesarCipher(str, num) {
  if (num > 26 || num < 0) {
    num = num % 26
  }
  let lowerStr = str.toLowerCase()
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let cipher = []
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] < 'a' || lowerStr[i] > 'z') {
      cipher.push(lowerStr[i])
      continue
    }

    let index = alphabets.indexOf(lowerStr[i])

    if (index + num > 25) index = index + num - 26
    else if (index + num < 0) index = index + num + 26
    else index += num

    if (str[i] >= 'A' && str[i] <= 'Z')
      cipher.push(alphabets[index].toUpperCase())
    else cipher.push(alphabets[index])
  }

  cipher = cipher.join('')
  return cipher
}

console.log(caesarCipher('Hello World', 1))
console.log(caesarCipher('Zoo Keeper', 2))
console.log(caesarCipher('Big Car', -16))
console.log(caesarCipher('Javascript', -900))
