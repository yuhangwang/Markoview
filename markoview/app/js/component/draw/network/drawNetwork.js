"use strict";
const range_js_1 = require("../../../tk/index/range/range.js");
function drawNetwork(matrixFormId) {
    const form = jQuery(`#${matrixFormId}`);
    const size = Math.sqrt(form.find("input").length);
    const nodes = range_js_1.range(size);
    console.log(nodes);
}
exports.drawNetwork = drawNetwork;
//# sourceMappingURL=drawNetwork.js.map