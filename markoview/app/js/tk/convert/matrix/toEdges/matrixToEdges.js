"use strict";
function matrixToEdges(matrix, nodes, s = null) {
    let edges = [];
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            let w = (s === null) ? matrix[i][j] : matrix[i][j] * s;
            edges.push({
                source: nodes[i],
                target: nodes[j],
                weight: w
            });
        }
    }
    return edges;
}
exports.matrixToEdges = matrixToEdges;
//# sourceMappingURL=matrixToEdges.js.map