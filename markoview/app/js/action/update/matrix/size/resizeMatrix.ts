import {form2D} from "../../../../tk/element/form/form2D.js";


/* Resize the matrix input form */
export function
resizeMatrix(
    buttonId: any,
    inputId: any,
    formId: any,
    newFormId: string,
    prop: any = {})
{   jQuery(`#${buttonId}`).click(() =>
            {   const n = parseInt(jQuery(`#${inputId}`).val(), 10);
                jQuery(`#${formId}`).replaceWith(form2D(n, n, null, newFormId));
                jQuery(`#${newFormId}`).find("input").css(prop);
            }
        );
    return formId;
}
