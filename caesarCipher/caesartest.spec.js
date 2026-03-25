const caesar = require("./caesar");

describe("Caesar Cipher", function () {
    test("normal string should shift", function () {
        expect(caesar("abc", 3)).toEqual("def");
    });
    test("normal string should shift", function () {
        expect(caesar("def", 3)).toEqual("ghi");
    });
    test("wrapping from z to a", function () {
        expect(caesar("xyz", 3)).toEqual("abc");
    });
    test("tesing case preservation", function () {
        expect(caesar("Aa", 3)).toEqual("Dd");
    });
    test("testing punctuation", function () {
        expect(caesar("Hello, World!", 3)).toEqual("Khoor, Zruog!");
    });
});