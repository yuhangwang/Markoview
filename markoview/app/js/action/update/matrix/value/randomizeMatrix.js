"use strict";
const randomStochasticmatrix_js_1 = require("../../../../tk/random/matrix/stochastic/randomStochasticmatrix.js");
function randomizeMatrix(formId, prop, precision = 2) {
    const size = Math.sqrt(jQuery(`#${formId}`).find("input").length);
    const newValues = randomStochasticmatrix_js_1.randomStochasticMatrix(size)
        .reduce((a, x) => a.concat(x));
    jQuery(`#${formId}`).find("input").each((i, obj) => jQuery(obj).attr("value", newValues[i].toPrecision(precision)).css(prop));
    return formId;
}
exports.randomizeMatrix = randomizeMatrix;
//# sourceMappingURL=randomizeMatrix.js.map