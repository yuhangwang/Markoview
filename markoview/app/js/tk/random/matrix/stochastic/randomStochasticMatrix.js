"use strict";
function randomStochasticMatrix(size) {
    return numeric.random([size, size])
        .map((xs) => numeric.div(xs, numeric.sum(xs)));
}
exports.randomStochasticMatrix = randomStochasticMatrix;
//# sourceMappingURL=randomStochasticmatrix.js.map