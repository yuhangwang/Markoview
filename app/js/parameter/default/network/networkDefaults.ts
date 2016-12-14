import {nodeDefaults} from "./node/nodeDefaults.js";
import {edgeDefaults} from "./edge/edgeDefaults.js";


/** Return network default parameters */
export function
networkDefaults()
{
    return {
        size: 3,
        node: nodeDefaults(),
        edge: edgeDefaults()
    }
}