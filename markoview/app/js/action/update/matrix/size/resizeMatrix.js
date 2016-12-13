"use strict";
const form2D_js_1 = require("../../../../tk/element/form/form2D.js");
const randomizeMatrix_js_1 = require("../../../../action/update/matrix/value/randomizeMatrix.js");
function resizeMatrix(rows, columns, formId, prop = {}) {
    jQuery(`#${formId}`).replaceWith(form2D_js_1.form2D(rows, columns, null, formId));
    jQuery(`#${formId}`).find("input").css(prop);
    randomizeMatrix_js_1.randomizeMatrix(formId, rows, columns, { width: "40px" });
    return formId;
}
exports.resizeMatrix = resizeMatrix;
//# sourceMappingURL=resizeMatrix.js.map