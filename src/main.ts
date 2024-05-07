export function textProcessing(text: string) {
  const wordArray: string[] = text.split(" ")
  const wordValues = new Map<string, number>()
  const newWordArray: string[] = []

  for (let index = 0; index < wordArray.length; index++) {
    if (wordArray[index].endsWith(".") || wordArray[index].endsWith(",")) {
      wordValues.set(wordArray[index].substring(0, wordArray[index].length - 1).toLowerCase(), 0)
      newWordArray.push(wordArray[index].substring(0, wordArray[index].length - 1).toLowerCase())
    } else {
      wordValues.set(wordArray[index].toLowerCase(), 0)
      newWordArray.push(wordArray[index].toLowerCase())
    }
  }

  let arrayKeys = Array.from(wordValues.keys())

  function countWords(array: string[], word: string) {
    return array.filter((element) => element == word).length
  }

  arrayKeys.forEach((value: string) => {
    wordValues.set(value, countWords(newWordArray, value))
  })

  let result = "Those are the top 10 words used:\n"

  let sortedArray = Array.from(wordValues).sort((a, b) => b[1] - a[1] || b[0].localeCompare(a[0]))

  const sortedMap = new Map(sortedArray)

  let newMapKeysArray = Array.from(sortedMap.keys())

  for (let index = 0; index < 10; index++) {
    result += "\n" + (index + 1) + ". " + newMapKeysArray[index]
  }
  result += "\n\nThe text has in total " + text.split(" ").length + " words"

  console.log(result)
  console.log(
    "Those are the top 10 words used:\n\n1. you\n2. this\n3. your\n4. to\n5. text\n6. test\n7. should\n8. practise\n9. make\n10. it\n\nThe text has in total 21 words",
  )
  return result
}
