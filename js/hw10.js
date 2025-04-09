
const opperations = function(callback, a,b) {
    return callback(a,b)
}
const fnAdd = function (a,b) {
    return `Результат додавання числа ${a} + ${b} = ${a + b}`;
}
const fnMinus = function (a,b) {
    return `Результат мінусовання числа ${a} - ${b} = ${a - b}`;
}
const fnMultiply = function (a,b) {
    return `Результат множення числа ${a} * ${b} = ${a * b}`;
}
const fnDivision = function (a,b) {
    return `Результат ділення числа ${a} : ${b} = ${a / b}`;
}
console.log(opperations(fnAdd, 2, 4));
console.log(opperations(fnMinus, 2, 6));
console.log(opperations(fnDivision, 2, 8));
console.log(opperations(fnMultiply, 2, 10));
