import { describe, it, expect } from "vitest"
import { textProcessing } from "./main.js"

describe("textProcessing", () => {
  // Debería contar los caracteres que hay en el texto
  // Debería mostrar la palabra más usada

  it("should count the number of words in the given text and indicate the most used words", () => {
    const result = textProcessing(
      "Hello, this is an example for you to practise. You should grab this text and make it as your test case.",
    )

    expect(result).equal(
      "Those are the top 10 words used:\n\n1. you\n2. this\n3. your\n4. to\n5. text\n6. test\n7. should\n8. practise\n9. make\n10. it\n\nThe text has in total 21 words",
    )
  })
})
