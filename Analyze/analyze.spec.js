const analyze = require("./analyze");

describe("Analyzes an array and returns an object", function (){
    test("Accepts an array and returns an object", function () {
        expect(analyze([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
    });
    test("Accepts an array and returns an object", function () {
        expect(analyze([1,3,3,4,2,6,4,1])).toEqual({average: 3, min: 1, max: 6, length: 8})
    });
});