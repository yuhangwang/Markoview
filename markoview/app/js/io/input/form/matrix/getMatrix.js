"use strict";
function getMatrix(formId) {
    let matrix = [];
    let ind = 0;
    jQuery(`#${formId}`)
        .contents()
        .each((i, item) => {
        if (item.nodeName == "INPUT") {
            if (!matrix[ind]) {
                matrix.push([]);
            }
            matrix[ind].push(parseFloat(jQuery(item).val()));
        }
        else {
            ind++;
        }
    });
    return matrix;
}
exports.getMatrix = getMatrix;
//# sourceMappingURL=getMatrix.js.map