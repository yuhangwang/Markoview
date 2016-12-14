"use strict";
const range_js_1 = require("../../../tk/index/range/range.js");
const matrixToEdges_js_1 = require("../../../tk/convert/matrix/toEdges/matrixToEdges.js");
const getMatrix_js_1 = require("../../../io/input/form/matrix/getMatrix.js");
const getArray_js_1 = require("../../../io/input/form/array/getArray.js");
const addForceNetwork_js_1 = require("../../../tk/d3/network/addForceNetwork.js");
const clearNetwork_js_1 = require("./clear/clearNetwork.js");
function drawNetwork(p) {
    const ids = p.dom.id;
    const defaults = p.default.network;
    const form = jQuery(`#${ids.form.matrixP}`);
    const size = Math.sqrt(form.find("input").length);
    const matrixP = getMatrix_js_1.getMatrix(ids.form.matrixP);
    const vector = getArray_js_1.getArray(ids.form.vector);
    const nodeNames = range_js_1.range(size).map((x) => x.toString());
    const nodes = nodeNames.map((x, i) => ({
        id: x,
        weight: vector[i]
    }));
    const edges = matrixToEdges_js_1.matrixToEdges(matrixP, nodes, defaults.edge.weightScaling);
    addForceNetwork_js_1.addForceNetwork(ids.svg.network, nodes, edges);
    jQuery(`#${ids.button.clearNetwork}`)
        .click(() => clearNetwork_js_1.clearNetwork(ids.svg.network));
}
exports.drawNetwork = drawNetwork;
//# sourceMappingURL=drawNetwork.js.map