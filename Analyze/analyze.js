const analyzeArray = function (array) {
    let length = 0;
    const average = function (array) {
        let total = array.reduce((total, current) => {
            length += 1;
            return total + current;
        }, 0);
        return total / length;
    };
    const min = function (array) {
        const sorted = array.sort((a, b) => {
            return a - b;
        });
        return sorted[0];
    }
    const max = function (array) {
        const sorted = array.sort((a, b) => {
            return b - a;
        });
        return sorted[0];
    }
    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: length
    }
};
module.exports = analyzeArray;