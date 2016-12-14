import {range} from "../../../tk/index/range/range.js";
import {matrixToEdges} from "../../../tk/convert/matrix/toEdges/matrixToEdges.js";
import {getMatrix} from "../../../io/input/form/matrix/getMatrix.js"
import {getArray} from "../../../io/input/form/array/getArray.js"
import {addForceNetwork} from "../../../tk/d3/network/addForceNetwork.js";


export function
drawNetwork(p: any)
{   const ids = p.dom.id;
    const defaults = p.default.network;
    const form = jQuery(`#${ids.form.matrixP}`);
    const size = Math.sqrt(form.find("input").length);
    const matrixP = getMatrix(ids.form.matrixP);
    const vector = getArray(ids.form.vector);
    const nodeNames = range(size).map((x) => x.toString());
    const nodes = nodeNames.map((x, i) => (
                {
                    id: x,
                    weight: vector[i]
                }
            ));
    const edges = matrixToEdges(matrixP, nodeNames, defaults.edge.weightScaling)
    addForceNetwork(nodes, edges);
}