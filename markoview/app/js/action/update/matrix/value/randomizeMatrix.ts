declare let jQuery: any;
import {randomStochasticMatrix} from "../../../../tk/random/matrix/stochastic/randomStochasticmatrix.js";


export function
randomizeMatrix(formId: any, prop: any, precision: number = 2)
{   const size = Math.sqrt(jQuery(`#${formId}`).find("input").length);
    const newValues = randomStochasticMatrix(size)
        .reduce((a: number[], x: number[]) => a.concat(x));
    jQuery(`#${formId}`).find("input").each(
        (i: number, obj: any) =>
        jQuery(obj).attr("value", newValues[i].toPrecision(precision)).css(prop)
        );
    return formId;
}