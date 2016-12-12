declare var jQuery: JQueryStatic;
import * as dtmc_P from "../component/matrix/DTMC/P/main.js";
import {matrixToString} from "../tk/convert/matrix/toString/matrixToString.js";
import {getMatrix} from "../io/input/form/matrix/getMatrix.js"
import {drawNetwork} from "../component/draw/network/drawNetwork.js";


const matrixFormId = "matrix";
const drawNetworkButtonId = "draw_network";
dtmc_P.main(matrixFormId);

const matrixP = getMatrix(matrixFormId);

console.log(matrixToString(matrixP));

jQuery(`#${drawNetworkButtonId}`)
    .click(() => drawNetwork(matrixFormId))
    ;

