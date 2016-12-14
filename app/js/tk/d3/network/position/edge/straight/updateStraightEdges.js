"use strict";
function updateStraightEdges(selector) {
    d3.selectAll(selector)
        .attr("x1", (d) => d.source.x)
        .attr("x2", (d) => d.target.x)
        .attr("y1", (d) => d.source.y)
        .attr("y2", (d) => d.target.y);
}
exports.updateStraightEdges = updateStraightEdges;
//# sourceMappingURL=updateStraightEdges.js.map