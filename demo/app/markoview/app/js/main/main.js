"use strict";
const dtmc_P = require("../component/matrix/DTMC/P/main.js");
const vector = require("../component/vector/main.js");
const getParams_js_1 = require("../parameter/getParams.js");
const getMatrix_js_1 = require("../io/input/form/matrix/getMatrix.js");
const drawNetwork_js_1 = require("../component/draw/network/drawNetwork.js");
const p = getParams_js_1.getParams();
const ids = p.dom.id;
dtmc_P.main(p);
vector.main(p);
const matrixP = getMatrix_js_1.getMatrix(ids.form.matrixP);
jQuery(`#${ids.button.drawNetwork}`)
    .click(() => drawNetwork_js_1.drawNetwork(p));
//# sourceMappingURL=main.js.map