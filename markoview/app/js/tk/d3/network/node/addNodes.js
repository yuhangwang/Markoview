"use strict";
function addNodes(svgId, nodes) {
    let nodeEnter = d3.select(`#${svgId}`)
        .selectAll("g.node")
        .data(nodes, (d) => d.id)
        .enter()
        .append("g")
        .attr("class", "node");
    nodeEnter.append("circle")
        .attr("r", 5)
        .style("fill", "blue")
        .style("stroke", "black")
        .style("stroke-width", "1px");
    nodeEnter.append("text")
        .style("text-anchor", "middle")
        .attr("y", 15)
        .text((d) => d.id);
}
exports.addNodes = addNodes;
//# sourceMappingURL=addNodes.js.map