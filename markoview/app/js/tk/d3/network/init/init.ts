declare let d3: any;
import {updateNodeEdgePosition} from "../position/updateNodeEdgePosition.js";


/** initialize the force network layout */
export function
init(svgId: string, nodes: any[], edges: any[])
{   let svg_width = jQuery(`#${svgId}`)[0].getBoundingClientRect().width;
    let svg_height = jQuery(`#${svgId}`)[0].getBoundingClientRect().height;
    let weightScale = d3.scale.linear()
        .domain(d3.extent(edges, (d: any) => d.weight))
        .range([0.1, 1])
        ;

    return d3.layout.force()
        .linkStrength((d: any) => 0.1 * weightScale(d.weight))
        .charge(-1000)
        .gravity(0.1)
        .size([svg_width, svg_height])
        .nodes(nodes)
        .links(edges)
        .on("tick", updateNodeEdgePosition)
        ;
}