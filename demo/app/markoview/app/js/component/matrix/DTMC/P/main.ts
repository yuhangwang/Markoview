declare var jQuery: JQueryStatic;

import {matrixToString} from "../../../../tk/convert/matrix/toString/matrixToString.js";
import {form2D} from "../../../../tk/element/form/form2D.js";
import {getMatrix} from "../../../../io/input/form/matrix/getMatrix.js"
import {resizeMatrix} from "../../../../action/update/matrix/size/resizeMatrix.js";
import {randomizeMatrix} from "../../../../action/update/matrix/value/randomizeMatrix.js";


export function
main(p: any)
{   const ids = p.dom.id;
    const defaults = p.default;

    // add initial matrix
    jQuery(`#${ids.form.matrixP}`)
        .replaceWith(
            form2D(
                defaults.network.size,
                defaults.network.size,
                null,
                ids.form.matrixP))
        ;
    randomizeMatrix(
        ids.form.matrixP,
        defaults.network.size,
        defaults.network.size,
        {width: "40px"})

    // let user resize the matrix
    jQuery(`#${ids.button.resizeNetwork}`)
        .click(() => resizeMatrix(
                parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10),
                parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10),
                ids.form.matrixP,
                {width: "40px"})
        );
    
    // make random stochastic matrix
    jQuery(`#${ids.button.randomizeMatrix}`)
        .click(() => randomizeMatrix(
            ids.form.matrixP,
            parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10),
            parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10),
            {width: "40px"}));

    // show matrix content on console
    jQuery(`#${ids.button.showMatrix}`).click(
        () => console.log(matrixToString(getMatrix(ids.form.matrixP)))
        );
}