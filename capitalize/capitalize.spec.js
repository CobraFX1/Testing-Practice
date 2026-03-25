const capitalize = require('./capitalize');

describe("Capitalize", function(){
    test('capitalize every string', function() {
        expect(capitalize('hello')).toEqual('Hello')
    });
    test('capitalize every string', function() {
        let text = "stephen";
        expect(capitalize(text)).toEqual('Stephen');
    });
});