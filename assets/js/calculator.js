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
    /*Clears display if the number is zero and the digit isn't .*/
    let display = this.display;
    display = (display == "0") & (digit != ".") ? "" : display;
    
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
    console.log(`Current display: %c${this.display}`, "color: blue");
  };

  addOperator = op => {
    let { operator, numbers, display, currentNumber } = this;

    numbers[this.currentNumber] = Number(display);

    console.log(`Added operator: %c${op}`, "color: red");

    /*Check is current operator and typed operator exists*/
    if ((operator != "") & (op != "")) {
      let calculation;
      const copyNumbers = { ...numbers };

      switch (operator) {
        case "+":
          calculation = numbers[0] + numbers[1];
          numbers[0] = calculation;
          console.log(`Sum is: %c${calculation}`, "color: red");
          break;
        case "-":
          calculation = numbers[0] - numbers[1];
          numbers[0] = calculation;
          console.log(`Subtraction is: %c${calculation}`, "color: red");
          break;
        case "*":
          calculation = numbers[0] * numbers[1];
          numbers[0] = calculation;
          console.log(`Product is: %c${calculation}`, "color: red");
          break;
        case "/":
          calculation = numbers[0] / numbers[1];
          numbers[0] = calculation;
          console.log(`Division is: %c${calculation}`, "color: red");
          break;
        default:
          console.log("%cInvalid operator!", "color: red");
          break;
      }
      /*Calculation done*/
      numbers[1] = 0;
      console.log(`${copyNumbers[0]} ${operator} ${copyNumbers[1]} = ${calculation}`);
    }

    /*Set this.operator to any operator that isn't equals, otherwise it may cause problems*/
    currentNumber = currentNumber == 0 ? 1 : 1;
    this.clearDisplay();

    operator = op == "=" ? "" : op;

    /*If operator is equals, then show the current display, otherwise, show the result*/
    op == "="
      ? (document.getElementById("display").innerHTML = this.numbers[0])
      : (document.getElementById("display").innerHTML = this.display);

    /*Set all properties*/
    this.operator = operator;
    this.numbers = numbers;
    this.currentNumber = currentNumber;
  };
}
