"use strict";
const updateNodeEdgePosition_js_1 = require("../position/updateNodeEdgePosition.js");
function init(svgId, nodes, edges) {
    let svg_width = jQuery(`#${svgId}`)[0].getBoundingClientRect().width;
    let svg_height = jQuery(`#${svgId}`)[0].getBoundingClientRect().height;
    let weightScale = d3.scale.linear()
        .domain(d3.extent(edges, (d) => d.weight))
        .range([0.1, 1]);
    return d3.layout.force()
        .linkStrength((d) => 0.1 * weightScale(d.weight))
        .charge(-1500)
        .gravity(0.1)
        .size([svg_width, svg_height])
        .nodes(nodes)
        .links(edges)
        .on("tick", updateNodeEdgePosition_js_1.updateNodeEdgePosition);
}
exports.init = init;
//# sourceMappingURL=init.js.map