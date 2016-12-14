declare let d3: any;


/** update the straight edges */
export function
updateStraightEdges(selector: string)
{   d3.selectAll(selector)
        .attr("x1", (d: any) => d.source.x)
        .attr("x2", (d: any) => d.target.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("y2", (d: any) => d.target.y)
        ;
}