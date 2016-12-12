"use strict";
const form2D_js_1 = require("../../../../tk/element/form/form2D.js");
function resizeMatrix(buttonId, inputId, formId, newFormId, prop = {}) {
    jQuery(`#${buttonId}`).click(() => {
        const n = parseInt(jQuery(`#${inputId}`).val(), 10);
        jQuery(`#${formId}`).replaceWith(form2D_js_1.form2D(n, n, null, newFormId));
        jQuery(`#${newFormId}`).find("input").css(prop);
    });
    return formId;
}
exports.resizeMatrix = resizeMatrix;
//# sourceMappingURL=resizeMatrix.js.map