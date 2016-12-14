"use strict";
const formIds_js_1 = require("./form/formIds.js");
const buttonIds_js_1 = require("./button/buttonIds.js");
const inputIds_js_1 = require("./input/inputIds.js");
const svgIds_js_1 = require("./svg/svgIds.js");
function elementIds() {
    return {
        form: formIds_js_1.formIds(),
        button: buttonIds_js_1.buttonIds(),
        input: inputIds_js_1.inputIds(),
        svg: svgIds_js_1.svgIds()
    };
}
exports.elementIds = elementIds;
//# sourceMappingURL=elementIds.js.map