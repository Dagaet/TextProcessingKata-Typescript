import { describe, it, expect } from "vitest"
import { textProcessing } from "./main.js"

describe("textProcessing", () => {
  // Debería contar los caracteres que hay en el texto
  //

  it("should count the number of words in the given text", () => {
    const result = textProcessing()

    expect(result).toBe("The text has in total 21 words")
  })
})
