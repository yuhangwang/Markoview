"use strict";
function addArrowHeadToCurves(force) {
    let marker = d3.select("svg")
        .append("defs")
        .append("marker")
        .attr("id", "Triangle")
        .attr("refX", 15)
        .attr("refY", -1.5)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 12)
        .attr("markerHeight", 18)
        .attr("orient", "auto")
        .attr("viewBox", "0 -5 10 10")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5");
    d3.selectAll("path")
        .attr("marker-end", "url(#Triangle)");
}
exports.addArrowHeadToCurves = addArrowHeadToCurves;
//# sourceMappingURL=addArrowHeadToCurves.js.map