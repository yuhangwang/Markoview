"use strict";
function clearNetwork(svgId) {
    d3.select(`#${svgId}`)
        .selectAll("*")
        .remove();
}
exports.clearNetwork = clearNetwork;
//# sourceMappingURL=clearNetwork.js.map