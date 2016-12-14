"use strict";
function updateArcEdges(selector) {
    d3.selectAll(selector)
        .attr("d", (d) => {
        let dx = d.target.x - d.source.x, dy = d.target.y - d.source.y, dr = Math.sqrt(dx * dx + dy * dy);
        let tol = 1.0e-4;
        if (dr < tol) {
            return ["M", d.source.x, d.source.y,
                "c -100 -100, 100 -100, 0 0"
            ].join(" ");
        }
        else {
            return [
                "M", d.source.x, d.source.y,
                "A", dr, dr, "0 0 1", d.target.x, d.target.y
            ].join(" ");
        }
    });
}
exports.updateArcEdges = updateArcEdges;
//# sourceMappingURL=updateArcEdges.js.map