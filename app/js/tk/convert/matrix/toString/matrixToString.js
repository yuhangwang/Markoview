"use strict";
const arrayToString_js_1 = require("../../array/toString/arrayToString.js");
function matrixToString(m) {
    return m.map(arrayToString_js_1.arrayToString).join("\n");
}
exports.matrixToString = matrixToString;
//# sourceMappingURL=matrixToString.js.map