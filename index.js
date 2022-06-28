"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter second number:\n');
    var controlInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (controlInput) {
        var firstNumb = parseInt(firstStr);
        var secondNumb = parseInt(secondStr);
        var result = calculate(firstNumb, operator, secondNumb);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
function calculate(firstNumb, operator, secondNumb) {
    switch (operator) {
        case '+':
            return firstNumb + secondNumb;
        case '-':
            return firstNumb - secondNumb;
        case '*':
            return firstNumb * secondNumb;
        case '/':
            return firstNumb / secondNumb;
    }
}
function isOperator(operator) {
    if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
        return true;
    }
    else {
        return false;
    }
    //alternative condition
    // switch(operator){
    //     case '+':
    //     case '-':
    //     case '/':
    //     case '*':
    //         return true;
    //         default:
    //             return false;
    // }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
