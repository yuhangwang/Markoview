"use strict";
const randomStochasticmatrix_js_1 = require("../../../../tk/random/matrix/stochastic/randomStochasticmatrix.js");
function randomizeMatrix(formId, rows, columns, prop, precision = 4) {
    const newValues = randomStochasticmatrix_js_1.randomStochasticMatrix(rows, columns)
        .reduce((a, x) => a.concat(x));
    jQuery(`#${formId}`).find("input").each((i, obj) => jQuery(obj).attr("value", newValues[i].toPrecision(precision)).css(prop));
    return formId;
}
exports.randomizeMatrix = randomizeMatrix;
//# sourceMappingURL=randomizeMatrix.js.map