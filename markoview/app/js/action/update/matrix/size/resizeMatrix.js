"use strict";
const form2D_js_1 = require("../../../../tk/element/form/form2D.js");
const randomizeMatrix_js_1 = require("../../../../action/update/matrix/value/randomizeMatrix.js");
function resizeMatrix(inputId, formId, prop = {}) {
    const n = parseInt(jQuery(`#${inputId}`).val(), 10);
    jQuery(`#${formId}`).replaceWith(form2D_js_1.form2D(n, n, null, formId));
    jQuery(`#${formId}`).find("input").css(prop);
    randomizeMatrix_js_1.randomizeMatrix(formId, { width: "40px" });
    return formId;
}
exports.resizeMatrix = resizeMatrix;
//# sourceMappingURL=resizeMatrix.js.map