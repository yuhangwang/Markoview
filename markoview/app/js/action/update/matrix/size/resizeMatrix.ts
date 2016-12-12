import {form2D} from "../../../../tk/element/form/form2D.js";
import {randomizeMatrix} from "../../../../action/update/matrix/value/randomizeMatrix.js";


/* Resize the matrix input form */
export function
resizeMatrix(
    inputId: string,
    formId: string,
    prop: any = {})
{   const n = parseInt(jQuery(`#${inputId}`).val(), 10);
    jQuery(`#${formId}`).replaceWith(form2D(n, n, null, formId));
    jQuery(`#${formId}`).find("input").css(prop);
    randomizeMatrix(formId, {width: "40px"})
    return formId;
}
