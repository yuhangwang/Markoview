"use strict";
const arrayToString_js_1 = require("../../tk/convert/array/toString/arrayToString.js");
const form2D_js_1 = require("../../tk/element/form/form2D.js");
const getArray_js_1 = require("../../io/input/form/array/getArray.js");
const resizeMatrix_js_1 = require("../../action/update/matrix/size/resizeMatrix.js");
const randomizeMatrix_js_1 = require("../../action/update/matrix/value/randomizeMatrix.js");
function main(p) {
    const ids = p.dom.id;
    const defaults = p.default;
    jQuery(`#${ids.form.vector}`)
        .replaceWith(form2D_js_1.form2D(1, defaults.network.size, null, ids.form.vector));
    randomizeMatrix_js_1.randomizeMatrix(ids.form.vector, 1, defaults.network.size, { width: "40px" });
    jQuery(`#${ids.button.resizeNetwork}`)
        .click(() => resizeMatrix_js_1.resizeMatrix(1, parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10), ids.form.vector, { width: "40px" }));
    jQuery(`#${ids.button.randomizeVector}`)
        .click(() => randomizeMatrix_js_1.randomizeMatrix(ids.form.vector, 1, parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10), { width: "40px" }));
    jQuery(`#${ids.button.showVector}`).click(() => console.log(arrayToString_js_1.arrayToString(getArray_js_1.getArray(ids.form.vector))));
}
exports.main = main;
//# sourceMappingURL=main.js.map