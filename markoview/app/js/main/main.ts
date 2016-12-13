declare var jQuery: JQueryStatic;
import * as dtmc_P from "../component/matrix/DTMC/P/main.js";
import * as vector from "../component/vector/main.js";
import {getParams} from "../parameter/getParams.js";
import {matrixToString} from "../tk/convert/matrix/toString/matrixToString.js";
import {getMatrix} from "../io/input/form/matrix/getMatrix.js"
import {drawNetwork} from "../component/draw/network/drawNetwork.js";

const p = getParams();
const ids = p.dom.id;
dtmc_P.main(p);
vector.main(p);

const matrixP = getMatrix(ids.form.matrixP);

console.log(matrixToString(matrixP));

jQuery(`#${ids.button.drawNetwork}`)
    .click(() => drawNetwork(p))
    ;

