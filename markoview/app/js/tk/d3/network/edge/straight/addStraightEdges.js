"use strict";
function addStraightEdges(svgId, edges) {
    d3.select(`#${svgId}`)
        .selectAll("line.link")
        .data(edges, (d) => d.source.id + "-" + d.target.id)
        .enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("opacity", 0.2)
        .style("stroke-width", (d) => 5 * d.weight);
}
exports.addStraightEdges = addStraightEdges;
//# sourceMappingURL=addStraightEdges.js.map