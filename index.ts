import { question } from "readline-sync";

type Operator = '+' | '-' | '/' | '*';

function main()
{
    const firstStr:string = question('Enter first number:\n');
    const operator: string = question('Enter operator:\n');
    const secondStr: string = question('Enter second number:\n');

    const controlInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

     if (controlInput) {
        const firstNumb: number = parseInt(firstStr);
        const secondNumb: number = parseInt(secondStr)
        const result = calculate(firstNumb,operator as Operator,secondNumb);
        console.log(result);
     }else{
        console.log('\ninvalid input\n');
        main();
     }
}

function calculate(firstNumb:number, operator:Operator,secondNumb: number){
    switch(operator){
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

function isOperator(operator: string): boolean
{
    if(operator === '+' ||  operator === '-' || operator === '/'|| operator === '*'){
        return true
    }else{
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

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

main();