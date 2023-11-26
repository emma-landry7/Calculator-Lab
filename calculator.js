// let num1
// let num2
// let result

// function add(num1, num2) {
//     result = num1 + num2
//     return result
// }

// add(2,3)

function calc(number1, number2, operation) {
    let num1 = Number.parseFloat(number1)
    let num2 = Number.parseFloat(number2)
    let result = function result() {
        switch (operation) {
        case '+':
            const add = num1 + num2;
            return add;
        case '-':
            const subtract = num1 - num2;
            return subtract;
        case '*':
            const multiply = num1 * num2;
            return multiply;
        case '/':
            const divide = num1 / num2;
            return divide;
        };
    }
    // document.getElementById(result).innerHTML = calc(2,3,'+')
    return result()
}

console.log(calc(2,3,'+'))
// document.getElementById(result).innerHTML = calc(2,3,'+')