"use strict";
const dom_js_1 = require("./dom/dom.js");
const defaults_js_1 = require("./default/defaults.js");
function getParams() {
    return {
        dom: dom_js_1.dom(),
        default: defaults_js_1.defaults()
    };
}
exports.getParams = getParams;
//# sourceMappingURL=getParams.js.map