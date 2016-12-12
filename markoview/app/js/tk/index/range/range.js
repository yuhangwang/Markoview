"use strict";
function range(start, stop = null, step = 1) {
    if (stop === null) {
        [start, stop] = [0, start];
    }
    else { }
    let output = [];
    for (let i = start; i < stop; i += step) {
        output.push(i);
    }
    return output;
}
exports.range = range;
//# sourceMappingURL=range.js.map