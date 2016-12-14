"use strict";
function updateNodes(selector) {
    d3.selectAll(selector)
        .attr("transform", (d) => "translate(" + d.x + "," + d.y + ")");
}
exports.updateNodes = updateNodes;
//# sourceMappingURL=updateNodes.js.map