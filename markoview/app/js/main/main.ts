declare var jQuery: JQueryStatic;

import {matrixToString} from "../tk/convert/matrix/toString/matrixToString.js";
import {form2D} from "../tk/element/form/form2D.js";
import {getMatrix} from "../io/input/form/matrix/getMatrix.js"
import {resizeMatrix} from "../action/update/matrix/resizeMatrix.js";


const matrixFormId = "matrix";
const matrixReSizeButtonId = "set_matrix_size";
const matrixSizeInputId = "matrix_size";
const showMatrixButtonId = "show_matrix";
const randomizeButtonId = "random_stochastic_matrix";
const defaultMatrixSize = 3;

// add initial matrix
jQuery("body").append(
    form2D(
        defaultMatrixSize,
        defaultMatrixSize,
        null,
        matrixFormId));

jQuery(`#${matrixFormId}`).find("input").css("width", "20px");
console.log(jQuery(`#${matrixFormId}`).find("input"));

// let user resize the matrix
resizeMatrix(
    jQuery(`#${matrixReSizeButtonId}`),
    jQuery(`#${matrixSizeInputId}`),
    jQuery(`#${matrixFormId}`),
    {width: "20px"}
    );

// show matrix on console
jQuery(`#${showMatrixButtonId}`).click(
    () =>
    console.log(matrixToString(getMatrix(jQuery(`#${matrixFormId}`))))
    );