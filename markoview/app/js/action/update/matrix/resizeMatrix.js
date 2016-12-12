"use strict";
const form2D_js_1 = require("../../../tk/element/form/form2D.js");
function resizeMatrix(button_id, input_id, form_id, prop = {}) {
    jQuery(`#${button_id}`)
        .click(() => {
        const n = parseInt(jQuery(`#${input_id}`).val(), 10);
        jQuery(`#${form_id}`).replaceWith(form2D_js_1.form2D(n, n, null, form_id));
        jQuery(`#${form_id} input`).css(prop);
    });
    return jQuery(form_id);
}
exports.resizeMatrix = resizeMatrix;
//# sourceMappingURL=resizeMatrix.js.map