"use strict";
function forceTick() {
    d3.selectAll("line.link")
        .attr("x1", (d) => d.source.x)
        .attr("x2", (d) => d.target.x)
        .attr("y1", (d) => d.source.y)
        .attr("y2", (d) => d.target.y);
    d3.selectAll("g.node")
        .attr("transform", (d) => "translate(" + d.x + "," + d.y + ")");
}
exports.forceTick = forceTick;
//# sourceMappingURL=forceTick.js.map