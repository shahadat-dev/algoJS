function harmlessRansomNote(noteText, magazineText) {
  // Convert noteText and magazineText into array
  let noteArr = noteText.split(' ')
  let magazineArr = magazineText.split(' ')
  let magazineObj = {}

  // Create a hash of magazine words : word as key and occurence as value
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0
    magazineObj[word]++
  })

  // Loop through noteArr and check whether it presents in magazineArr
  let noteIsPossible = true
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--
      if (magazineObj[word] < 0) noteIsPossible = false
    } else {
      noteIsPossible = false
    }
  })

  return noteIsPossible
}

// Test
const test1 = harmlessRansomNote(
  'this is the text',
  'this is all the magazine text in the magazine'
)
console.log(test1) // true

const test2 = harmlessRansomNote(
  'this is the secret text',
  'this is all the magazine text in the magazine'
)
console.log(test2) // false

/*
 * Complexity : Linear Time Complexity
 * We have two for loops here, but they are not nested
 *
 * O(n) + O(m)
 * = O(n + m)
 * = O(n)
 */
