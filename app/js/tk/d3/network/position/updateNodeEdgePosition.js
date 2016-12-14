"use strict";
const updateArcEdges_js_1 = require("./edge/arc/updateArcEdges.js");
const updateNodes_js_1 = require("./node/updateNodes.js");
function updateNodeEdgePosition() {
    updateArcEdges_js_1.updateArcEdges("path.link");
    updateNodes_js_1.updateNodes("g.node");
}
exports.updateNodeEdgePosition = updateNodeEdgePosition;
//# sourceMappingURL=updateNodeEdgePosition.js.map