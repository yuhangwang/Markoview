"use strict";
const matrixToString_js_1 = require("../../tk/convert/matrix/toString/matrixToString.js");
const form2D_js_1 = require("../../tk/element/form/form2D.js");
let rows = 3;
let columns = 3;
jQuery("body").append(form2D_js_1.form2D(3, 3, null, "frm"));
jQuery("#get").click(() => console.log(matrixToString_js_1.matrixToString(getMatrix())));
function getMatrix() {
    let matrix_row = [];
    let ind = 0;
    jQuery("#frm").contents().each(function (i, e) {
        if (this.nodeName == "INPUT") {
            if (!matrix_row[ind]) {
                matrix_row.push([]);
            }
            matrix_row[ind].push(jQuery(this).val());
        }
        else {
            ind++;
        }
    });
    return matrix_row;
}
//# sourceMappingURL=matrix.js.map