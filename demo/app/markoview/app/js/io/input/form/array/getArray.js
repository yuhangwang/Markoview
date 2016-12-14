"use strict";
function getArray(formId) {
    let array = [];
    jQuery(`#${formId}`)
        .contents()
        .each((i, item) => {
        if (item.nodeName == "INPUT") {
            array.push(parseFloat(jQuery(item).val()));
        }
        else { }
    });
    return array;
}
exports.getArray = getArray;
//# sourceMappingURL=getArray.js.map