import {form2D} from "../../../../tk/element/form/form2D.js";
import {randomizeMatrix} from "../../../../action/update/matrix/value/randomizeMatrix.js";


/* Resize the matrix input form */
export function
resizeMatrix(
        rows: number,
        columns: number,
        formId: string,
        prop: any = {})
{   jQuery(`#${formId}`).replaceWith(form2D(rows, columns, null, formId));
    jQuery(`#${formId}`).find("input").css(prop);
    randomizeMatrix(formId, rows, columns, {width: "40px"})
    return formId;
}
