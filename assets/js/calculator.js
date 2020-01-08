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
    document.getElementById("display").innerHTML = "0";
  };

  clearDisplay = () => {
    this.display = "0";
  };

  addDigit = digit => {
    let display = this.display == "0" ? "" : this.display;
    const digitString = digit.toString();
    /*Check if display already includes . or digit and display is zero*/
    if (
      (digitString == ".") & display.includes(".") ||
      (display == 0) & (digitString == 0)
    ) {
      return;
    }

    display += digitString;
    document.getElementById("display").innerHTML = display;
    this.display = display;
    console.log(this.display);
  };

  addOperator = operator => {
    const currentOperator = this.operator;
    this.numbers[this.currentNumber] = Number(this.display);

    console.log(operator, this.operator, this.numbers);

    /*Check is current operator and typed operator exists*/
    if (currentOperator != null & operator != null) {
      switch (currentOperator) {
        case "+":
          const sum = this.numbers[0] + this.numbers[1];
          this.numbers[0] = sum;
          this.numbers[1] = 0;
          console.log("Sum is: " + sum);
          break;
        case "-":
          const subtraction = this.numbers[0] - this.numbers[1];
          this.numbers[0] = subtraction;
          this.numbers[1] = 0;
          console.log("Subtraction is: " + subtraction);
          break;
        case "*":
          const product = this.numbers[0] * this.numbers[1];
          this.numbers[0] = product;
          this.numbers[1] = 0;
          console.log("Product is: " + product);
          break;
        case "/":
          const division = this.numbers[0] / this.numbers[1];
          this.numbers[0] = division;
          this.numbers[1] = 0;
          console.log("Product is: " + division);
          break;
        default:
          console.log("Invalid operator!");
          break;
      }
    }

    /*Set this.operator to any operator that isn't equals, otherwise it may cause problems*/
    this.operator = operator == "=" ? "" : operator;
    this.currentNumber = this.currentNumber == 0 ? 1 : 1;
    this.clearDisplay();
    /*If operator is equals, then show the current display, otherwise, show the result*/
    operator == "=" ? document.getElementById("display").innerHTML = this.numbers[0] : document.getElementById("display").innerHTML = this.display;
    console.log(operator, this.operator, this.numbers);
  };

  calculate = () => {
    const currentOperator = this.operator;

    switch (currentOperator) {
      case "+":
        this.numbers[0] += this.numbers[1];
        this.numbers[1] = 0;
        break;
    }
  };
}
