declare var jQuery: JQueryStatic;

import {matrixToString} from "../../../../tk/convert/matrix/toString/matrixToString.js";
import {form2D} from "../../../../tk/element/form/form2D.js";
import {getMatrix} from "../../../../io/input/form/matrix/getMatrix.js"
import {resizeMatrix} from "../../../../action/update/matrix/size/resizeMatrix.js";
import {randomizeMatrix} from "../../../../action/update/matrix/value/randomizeMatrix.js";


export function
main(matrixFormId: string)
{   const resizeMatrixButtonId = "set_matrix_size";
    const matrixSizeInputId = "matrix_size";
    const showMatrixButtonId = "show_matrix";
    const randomizeButtonId = "random_stochastic_matrix";
    const defaultMatrixSize = 3;

    // add initial matrix
    jQuery(`#${matrixFormId}`)
        .replaceWith(
            form2D(
                defaultMatrixSize,
                defaultMatrixSize,
                null,
                matrixFormId))
        ;
    randomizeMatrix(
        matrixFormId,
        defaultMatrixSize,
        defaultMatrixSize,
        {width: "40px"})

    // let user resize the matrix
     jQuery(`#${resizeMatrixButtonId}`)
        .click(() => resizeMatrix(
                parseInt(jQuery(`#${matrixSizeInputId}`).val(), 10),
                parseInt(jQuery(`#${matrixSizeInputId}`).val(), 10),
                matrixFormId,
                {width: "40px"})
        );
    
    // make random stochastic matrix
    jQuery(`#${randomizeButtonId}`)
        .click(() => randomizeMatrix(
            matrixFormId,
            parseInt(jQuery(`#${matrixSizeInputId}`).val(), 10),
            parseInt(jQuery(`#${matrixSizeInputId}`).val(), 10),
            {width: "40px"}));

    // show matrix content on console
    jQuery(`#${showMatrixButtonId}`).click(
        () => console.log(matrixToString(getMatrix(matrixFormId)))
        );
}