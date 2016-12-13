"use strict";
const matrixToString_js_1 = require("../../../../tk/convert/matrix/toString/matrixToString.js");
const form2D_js_1 = require("../../../../tk/element/form/form2D.js");
const getMatrix_js_1 = require("../../../../io/input/form/matrix/getMatrix.js");
const resizeMatrix_js_1 = require("../../../../action/update/matrix/size/resizeMatrix.js");
const randomizeMatrix_js_1 = require("../../../../action/update/matrix/value/randomizeMatrix.js");
function main(p) {
    const ids = p.dom.id;
    const defaults = p.default;
    jQuery(`#${ids.form.matrixP}`)
        .replaceWith(form2D_js_1.form2D(defaults.network.size, defaults.network.size, null, ids.form.matrixP));
    randomizeMatrix_js_1.randomizeMatrix(ids.form.matrixP, defaults.network.size, defaults.network.size, { width: "40px" });
    jQuery(`#${ids.button.resizeNetwork}`)
        .click(() => resizeMatrix_js_1.resizeMatrix(parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10), parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10), ids.form.matrixP, { width: "40px" }));
    jQuery(`#${ids.button.randomizeMatrix}`)
        .click(() => randomizeMatrix_js_1.randomizeMatrix(ids.form.matrixP, parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10), parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10), { width: "40px" }));
    jQuery(`#${ids.button.showMatrix}`).click(() => console.log(matrixToString_js_1.matrixToString(getMatrix_js_1.getMatrix(ids.form.matrixP))));
}
exports.main = main;
//# sourceMappingURL=main.js.map