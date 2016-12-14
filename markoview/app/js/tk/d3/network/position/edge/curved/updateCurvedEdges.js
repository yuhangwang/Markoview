"use strict";
function updateCurvedEdges(selector) {
    d3.selectAll(selector)
        .attr("d", (d) => {
        let dx = d.target.x - d.source.x, dy = d.target.y - d.source.y, dr = Math.sqrt(dx * dx + dy * dy);
        return "M" + d.source.x + "," +
            d.source.y + "A" + dr + "," +
            dr + " 0 0,1 " + d.target.x + "," +
            d.target.y;
    });
}
exports.updateCurvedEdges = updateCurvedEdges;
//# sourceMappingURL=updateCurvedEdges.js.map