"use strict";
const forceTick_js_1 = require("./forceTick/forceTick.js");
function addForceNetwork(nodes, edges) {
    let weightScale = d3.scale.linear()
        .domain(d3.extent(edges, (d) => d.weight))
        .range([0.1, 1]);
    let force = d3.layout.force()
        .linkStrength((d) => 0.1 * weightScale(d.weight))
        .charge(-1000)
        .gravity(0.1)
        .size([500, 500])
        .nodes(nodes)
        .links(edges)
        .on("tick", forceTick_js_1.forceTick);
    d3.select("svg")
        .selectAll("line.link")
        .data(edges, (d) => d.source.id + "-" + d.target.id)
        .enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("opacity", 0.5)
        .style("stroke-width", (d) => d.weight);
    console.log(d3.select("svg"));
    let nodeEnter = d3.select("svg")
        .selectAll("g.node")
        .data(nodes, (d) => d.id)
        .enter()
        .append("g")
        .attr("class", "node");
    nodeEnter.append("circle")
        .attr("r", 5)
        .style("fill", "lightgray")
        .style("stroke", "black")
        .style("stroke-width", "1px");
    nodeEnter.append("text")
        .style("text-anchor", "middle")
        .attr("y", 15)
        .text((d) => d.id);
    force.start();
}
exports.addForceNetwork = addForceNetwork;
//# sourceMappingURL=addForceNetwork.js.map