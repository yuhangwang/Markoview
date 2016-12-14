declare let d3: any;
import {updateCurvedEdges} from "./edge/curved/updateCurvedEdges.js";
import {updateStraightEdges} from "./edge/straight/updateStraightEdges.js";
import {updateNodes} from "./node/updateNodes.js";


/** Update the postions of nodes and edges */
export function
updateNodeEdgePosition()
{   //updateStraightEdges("line.link");
{   updateCurvedEdges("path.link");
    updateNodes("g.node");
}