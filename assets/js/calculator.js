class Calculator {
  constructor() {
    this.display = "0";
    this.currentNumber = 0;
    this.numbers = [0, 0];
    this.operator = "";

    console.log("Calculator initialized!");
  }

  clear = () => {
    this.display = "0";
    this.currentNumber = 0;
    this.numbers = [0, 0];
    this.operator = "";
  };

  clearDisplay = () => {
    this.display = "";
  };

  addDigit = digit => {
    const display = this.display;
    const digitString = digit.toString();
    if (digit == "." & display.includes(".") || (display == digitString)) {
      return;
    }

    display += digitString;
    console.log(display);
  };
}
