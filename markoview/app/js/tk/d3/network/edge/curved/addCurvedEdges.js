"use strict";
function addCurvedEdges(svgId, edges) {
    d3.select(`#${svgId}`)
        .selectAll("path.link")
        .data(edges, (d) => d.source.id + "-" + d.target.id)
        .enter()
        .append("path")
        .attr("class", "link");
}
exports.addCurvedEdges = addCurvedEdges;
//# sourceMappingURL=addCurvedEdges.js.map