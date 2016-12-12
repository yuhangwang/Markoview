import {form2D} from "../../../tk/element/form/form2D.js";


/* Resize the matrix input form */
export function
resizeMatrix(button_id: string, input_id: string, form_id: string, prop: any = {})
{   jQuery(`#${button_id}`)
        .click(() =>
            {   const n = parseInt(jQuery(`#${input_id}`).val(), 10);
                jQuery(`#${form_id}`).replaceWith(form2D(n, n, null, form_id));
                jQuery(`#${form_id} input`).css(prop);
            }
        );
    return jQuery(form_id);
}
