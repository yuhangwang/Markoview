import {form2D} from "../../../tk/element/form/form2D.js";


/* Resize the matrix input form */
export function
resizeMatrix(buttonObj: any, inputObj: any, formObj: any, prop: any = {})
{   buttonObj.click(() =>
            {   const n = parseInt(inputObj.val(), 10);
                formObj.replaceWith(form2D(n, n, null, form_id));
                formObj.find("input").css(prop);
            }
        );
    return formObj;
}
