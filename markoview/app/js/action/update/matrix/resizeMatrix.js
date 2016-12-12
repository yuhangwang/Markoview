"use strict";
const form2D_js_1 = require("../../../tk/element/form/form2D.js");
function resizeMatrix(buttonObj, inputObj, formObj, prop = {}) {
    buttonObj.click(() => {
        const n = parseInt(inputObj.val(), 10);
        formObj.replaceWith(form2D_js_1.form2D(n, n, null, form_id));
        formObj.find("input").css(prop);
    });
    return formObj;
}
exports.resizeMatrix = resizeMatrix;
//# sourceMappingURL=resizeMatrix.js.map