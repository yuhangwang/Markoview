declare var jQuery: JQueryStatic;

import {arrayToString} from "../../tk/convert/array/toString/arrayToString.js";
import {form2D} from "../../tk/element/form/form2D.js";
import {getArray} from "../../io/input/form/array/getArray.js"
import {resizeMatrix} from "../../action/update/matrix/size/resizeMatrix.js";
import {randomizeMatrix} from "../../action/update/matrix/value/randomizeMatrix.js";


export function
main(p: any)
{   const ids = p.dom.id;
    const defaults = p.default;

    // add initial vector
    jQuery(`#${ids.form.vector}`)
        .replaceWith(
            form2D(
                1,
                defaults.network.size,
                null,
                ids.form.vector))
        ;
    randomizeMatrix(
        ids.form.vector,
        1,
        defaults.network.size,
        {width: "40px"})

    // let user resize the vector
     jQuery(`#${ids.button.resizeNetwork}`)
        .click(() => resizeMatrix(
                1,
                parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10),
                ids.form.vector,
                {width: "40px"})
        );
    
    // make random stochastic vector
    jQuery(`#${ids.button.randomizeVector}`)
        .click(() => randomizeMatrix(
            ids.form.vector,
            1,
            parseInt(jQuery(`#${ids.input.networkSize}`).val(), 10),
            {width: "40px"}));

    // show vector content on console
    jQuery(`#${ids.button.showVector}`).click(
        () => console.log(arrayToString(getArray(ids.form.vector)))
        );
}