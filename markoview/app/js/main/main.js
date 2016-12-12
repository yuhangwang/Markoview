"use strict";
const matrixToString_js_1 = require("../tk/convert/matrix/toString/matrixToString.js");
const form2D_js_1 = require("../tk/element/form/form2D.js");
const getMatrix_js_1 = require("../io/input/form/matrix/getMatrix.js");
const resizeMatrix_js_1 = require("../action/update/matrix/size/resizeMatrix.js");
const randomizeMatrix_js_1 = require("../action/update/matrix/value/randomizeMatrix.js");
const matrixFormId = "matrix";
const matrixReSizeButtonId = "set_matrix_size";
const matrixSizeInputId = "matrix_size";
const showMatrixButtonId = "show_matrix";
const randomizeButtonId = "random_stochastic_matrix";
const defaultMatrixSize = 3;
jQuery("body").append(form2D_js_1.form2D(defaultMatrixSize, defaultMatrixSize, null, matrixFormId));
jQuery(`#${matrixFormId}`).find("input").css("width", "20px");
resizeMatrix_js_1.resizeMatrix(matrixReSizeButtonId, matrixSizeInputId, matrixFormId, matrixFormId, { width: "20px" });
randomizeMatrix_js_1.randomizeMatrix(randomizeButtonId, matrixFormId, { width: "40px" });
jQuery(`#${showMatrixButtonId}`).click(() => console.log(matrixToString_js_1.matrixToString(getMatrix_js_1.getMatrix(jQuery(`#${matrixFormId}`)))));
//# sourceMappingURL=main.js.map