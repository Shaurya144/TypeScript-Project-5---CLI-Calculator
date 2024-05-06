"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function Main() {
    var firstStr = (0, readline_sync_1.question)("First Number:\n");
    var operator = (0, readline_sync_1.question)("Enter Operator:\n");
    var SecondStr = (0, readline_sync_1.question)("Enter Second Number:\n");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(SecondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(SecondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("\n Invalid Inpput \n");
        Main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "/":
        case "*":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str); // Same as Number(YourVar)
    var isNum = !isNaN(maybeNum); // !isNaN - Not a Number
    return isNum;
}
Main();
