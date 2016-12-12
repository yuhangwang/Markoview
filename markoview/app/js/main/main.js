"use strict";
const matrixToString_js_1 = require("../tk/convert/matrix/toString/matrixToString.js");
const form2D_js_1 = require("../tk/element/form/form2D.js");
const getMatrix_js_1 = require("../io/input/form/matrix/getMatrix.js");
const resizeMatrix_js_1 = require("../action/update/matrix/resizeMatrix.js");
const matrixFormId = "matrix";
const matrixSizeButtonId = "set_matrix_size";
const matrixSizeInputId = "matrix_size";
const showMatrixButtonId = "show_matrix";
jQuery("body").append(form2D_js_1.form2D(3, 3, null, matrixFormId));
jQuery(`#${matrixFormId} input`).css("width", "20px");
resizeMatrix_js_1.resizeMatrix(matrixSizeButtonId, matrixSizeInputId, matrixFormId, { width: "20px" });
jQuery(`#${showMatrixButtonId}`)
    .click(() => console.log(matrixToString_js_1.matrixToString(getMatrix_js_1.getMatrix(jQuery(`#${matrixFormId}`)))));
//# sourceMappingURL=main.js.map