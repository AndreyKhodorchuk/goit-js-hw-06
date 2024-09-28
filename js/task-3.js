class StringBuilder {
  // Приватна властивість
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Повертає поточне значення
  getValue() {
    return this.#value;
  }

  // Додає рядок в кінець значення
  padEnd(str) {
    this.#value += str;
  }

  // Додає рядок на початок значення
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Додає рядок на початок і в кінець значення
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// Код для перевірки
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
