"use strict";
const nodeDefaults_js_1 = require("./node/nodeDefaults.js");
const edgeDefaults_js_1 = require("./edge/edgeDefaults.js");
function networkDefaults() {
    return {
        size: 3,
        node: nodeDefaults_js_1.nodeDefaults(),
        edge: edgeDefaults_js_1.edgeDefaults()
    };
}
exports.networkDefaults = networkDefaults;
//# sourceMappingURL=networkDefaults.js.map