"use strict";
function randomStochasticMatrix(rows, columns) {
    return numeric.random([rows, columns])
        .map((xs) => numeric.div(xs, numeric.sum(xs)));
}
exports.randomStochasticMatrix = randomStochasticMatrix;
//# sourceMappingURL=randomStochasticmatrix.js.map