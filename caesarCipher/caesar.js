const caesar = function (string, shift) {

    return string.split("")
        .map((char) => {
            const code = char.charCodeAt();
            if (code >= 65 && code <= 90) {
                return String.fromCharCode((((code - 65) + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode((((code - 97) + shift) % 26) + 97);
            }
            return String.fromCharCode(code);
        })
        .join("");
};
module.exports = caesar;
/**
 * access the char code of each charactter and increase it by shift 
 * then change the char code back to the charactdr
 * each number should exist between 1 and 26 that means that modulus can be used to determine the remainder
 * then the normal ascii can be added 
 */
