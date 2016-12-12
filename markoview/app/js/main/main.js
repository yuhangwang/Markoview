"use strict";
const dtmc_P = require("../component/matrix/DTMC/P/main.js");
const matrixToString_js_1 = require("../tk/convert/matrix/toString/matrixToString.js");
const getMatrix_js_1 = require("../io/input/form/matrix/getMatrix.js");
const drawNetwork_js_1 = require("../component/draw/network/drawNetwork.js");
const matrixFormId = "matrix";
const drawNetworkButtonId = "draw_network";
dtmc_P.main(matrixFormId);
const matrixP = getMatrix_js_1.getMatrix(matrixFormId);
console.log(matrixToString_js_1.matrixToString(matrixP));
jQuery(`#${drawNetworkButtonId}`)
    .click(() => drawNetwork_js_1.drawNetwork(matrixFormId));
//# sourceMappingURL=main.js.map