exports.min = function min(array = []) {
    if (!array.length) {
        return 0;
    }

    return Math.min(...array);
};

exports.max = function max(array = []) {
    if (!array.length) {
        return 0;
    }

    return Math.max(...array);
};

exports.avg = function avg(array = []) {
    if (!array.length) {
        return 0;
    }

    return array.reduce((acc, item) => acc + item) / array.length;
};
