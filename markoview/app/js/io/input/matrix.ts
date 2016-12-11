declare var jQuery: JQueryStatic;
import {matrixToString} from "../../tk/convert/matrix/toString/matrixToString.js";
import {form2D} from "../../tk/element/form/form2D.js";

let rows = 3;
let columns = 3;



jQuery("body").append(form2D(3,3, null, "frm"));

jQuery("#get").click(() => console.log(matrixToString(getMatrix())));
function getMatrix(){
    let matrix_row: number[][] = [];

    let ind = 0;
    
    jQuery("#frm").contents().each(function(i,e){
        if (this.nodeName == "INPUT")
        {
            if (!matrix_row[ind]){
                matrix_row.push([]);
            }
             matrix_row[ind].push(jQuery(this).val());            
        }
        else{
            ind++;
        }
    });
    
    return matrix_row;
}