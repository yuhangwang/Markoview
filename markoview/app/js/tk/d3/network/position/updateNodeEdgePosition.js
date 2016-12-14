"use strict";
const updateCurvedEdges_js_1 = require("./edge/curved/updateCurvedEdges.js");
const updateNodes_js_1 = require("./node/updateNodes.js");
function updateNodeEdgePosition() {
    updateCurvedEdges_js_1.updateCurvedEdges("path.link");
    updateNodes_js_1.updateNodes("g.node");
}
exports.updateNodeEdgePosition = updateNodeEdgePosition;
//# sourceMappingURL=updateNodeEdgePosition.js.map