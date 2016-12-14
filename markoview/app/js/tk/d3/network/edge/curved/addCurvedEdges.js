"use strict";
function addCurvedEdges(svgId, edges) {
    d3.select(`#${svgId}`)
        .selectAll("path.link")
        .data(edges, (d) => d.source.id + "-" + d.target.id)
        .enter()
        .append("path")
        .attr("class", "link")
        .style("stroke", "black")
        .style("opacity", 0.2)
        .style("stroke-width", (d) => 5 * d.weight);
}
exports.addCurvedEdges = addCurvedEdges;
//# sourceMappingURL=addCurvedEdges.js.map