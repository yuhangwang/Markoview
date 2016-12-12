declare var jQuery: JQueryStatic;

import {matrixToString} from "../tk/convert/matrix/toString/matrixToString.js";
import {form2D} from "../tk/element/form/form2D.js";
import {getMatrix} from "../io/input/form/matrix/getMatrix.js"
import {resizeMatrix} from "../action/update/matrix/resizeMatrix.js";


const matrixFormId = "matrix";
const matrixSizeButtonId = "set_matrix_size";
const matrixSizeInputId = "matrix_size";
const showMatrixButtonId = "show_matrix"

// add initial matrix
jQuery("body").append(form2D(3,3, null, matrixFormId));
jQuery(`#${matrixFormId} input`).css("width", "20px");

// let user resize the matrix
resizeMatrix(matrixSizeButtonId, matrixSizeInputId, matrixFormId, {width: "20px"});

// show matrix on console
jQuery(`#${showMatrixButtonId}`)
    .click(() => console.log(
        matrixToString(getMatrix(jQuery(`#${matrixFormId}`)))));