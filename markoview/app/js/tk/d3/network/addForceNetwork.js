"use strict";
const init_js_1 = require("./init/init.js");
const addArrowHead_js_1 = require("./arrowHead/addArrowHead.js");
const addCurvedEdges_js_1 = require("./edge/curved/addCurvedEdges.js");
const addNodes_js_1 = require("./node/addNodes.js");
function addForceNetwork(svgId, nodes, edges) {
    let force = init_js_1.init(svgId, nodes, edges);
    addNodes_js_1.addNodes(svgId, nodes);
    addCurvedEdges_js_1.addCurvedEdges(svgId, edges);
    force.start();
    addArrowHead_js_1.addArrowHead(force);
}
exports.addForceNetwork = addForceNetwork;
//# sourceMappingURL=addForceNetwork.js.map