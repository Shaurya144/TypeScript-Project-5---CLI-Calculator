import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function Main(): void{ //  The Void means it won't return anything
    const firstStr: string = question("First Number:\n");
    const operator: string = question("Enter Operator:\n");
    const SecondStr: string = question("Enter Second Number:\n");

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(SecondStr);
    if (validInput){
        const firstNum: number = parseInt(firstStr)
        const secondNum:number = parseInt(SecondStr)
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(result)
    
    }
    else
    {
        console.log("\n Invalid Inpput \n")
        Main()
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number){
    switch(operator){
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

function isOperator(operator: string):boolean{
    switch(operator){
        case "+":
        case "-":
        case "/":
        case "*":
            return true
        default:
            return false
    }
}

function isNumber(str: string): boolean{
    const maybeNum = parseInt(str); // Same as Number(YourVar)
    const isNum: boolean = !isNaN(maybeNum); // !isNaN - Not a Number
    return isNum
}

Main();