import {range} from "../../../tk/index/range/range.js";


export function
drawNetwork(matrixFormId: string)
{   const form = jQuery(`#${matrixFormId}`);
    const size = Math.sqrt(form.find("input").length);
    const nodes = range(size);
    console.log(nodes);
}