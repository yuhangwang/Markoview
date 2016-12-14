declare let d3: any;
import {init} from "./init/init.js";
import {addArrowHead} from "./arrowHead/addArrowHead.js";
import {addStraightEdges} from "./edge/straight/addStraightEdges.js";
import {addCurvedEdges} from "./edge/curved/addCurvedEdges.js";
import {addNodes} from "./node/addNodes.js";


/**
 * Add a force-balanced network plot
 * @param {string} svgId: ID of the target svg node
 * @param {any[]} nodes - a list of node objects {id: _, weight: _}
 * @param {any[]} edges - a list of edge objects {source: _, target: _, weight: _}
 */
export function
addForceNetwork(svgId: string, nodes: any[], edges: any[])
{   let force = init(svgId, nodes, edges);
    addNodes(svgId, nodes);
    addCurvedEdges(svgId, edges);
    force.start();
    addArrowHead(force);
}
