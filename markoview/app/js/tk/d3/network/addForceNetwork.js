"use strict";
const init_js_1 = require("./init/init.js");
const addArrowHeadToCurves_js_1 = require("./arrowHead/curved/addArrowHeadToCurves.js");
const addCurvedEdges_js_1 = require("./edge/curved/addCurvedEdges.js");
const addNodes_js_1 = require("./node/addNodes.js");
function addForceNetwork(svgId, nodes, edges) {
    let force = init_js_1.init(svgId, nodes, edges);
    addNodes_js_1.addNodes(svgId, nodes);
    addCurvedEdges_js_1.addCurvedEdges(svgId, edges);
    force.start();
    addArrowHeadToCurves_js_1.addArrowHeadToCurves(force);
}
exports.addForceNetwork = addForceNetwork;
//# sourceMappingURL=addForceNetwork.js.map