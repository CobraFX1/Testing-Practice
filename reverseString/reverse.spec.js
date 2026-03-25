const reverse = require('./reverse');
describe("Reverse String", function () {
    test("Takes a string and reverse it.", function () {
        expect(reverse("hello")).toEqual("olleh");
    });

  test('reverses multiple words', () => {
    expect(reverse('hello there')).toEqual('ereht olleh');
  });

  test('works with numbers and punctuation', () => {
    expect(reverse('123! abc! Hello, Odinite.')).toEqual(
      '.etinidO ,olleH !cba !321'
    );
  });
  test('works with blank strings', () => {
    expect(reverse('')).toEqual('');
  });
})
