declare let d3: any;
import {updateArcEdges} from "./edge/arc/updateArcEdges.js";
import {updateStraightEdges} from "./edge/straight/updateStraightEdges.js";
import {updateNodes} from "./node/updateNodes.js";


/** Update the postions of nodes and edges */
export function
updateNodeEdgePosition()
{   //updateStraightEdges("line.link");
    updateArcEdges("path.link");
    updateNodes("g.node");
}