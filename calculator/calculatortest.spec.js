const calculator = require("./calculator");

describe("Calculator", function () {
    test("adds two numbers", function () {
        expect(calculator.add(2, 3)).toEqual(5);
    });
    test("subtracts two numbers", function () {
        expect(calculator.subtract(20, 3)).toEqual(17);
    });
    test("multiply two numbers", function () {
        expect(calculator.multiply(20, 3)).toEqual(60);
    });
    test("divide two numbers", function () {
        expect(calculator.divide(60, 3)).toEqual(20);
    });
});