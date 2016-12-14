declare let d3: any;


/** add curved network edges */
export function
addCurvedEdges(svgId: string, edges: any[])
{   d3.select(`#${svgId}`)
        .selectAll("path.link")
        .data(edges, (d: any) => d.source.id + "-" + d.target.id)
        .enter()
        .append("path")
        .attr("class", "link")
        .style("stroke", "black")
        .style("opacity", 0.2)
        .style("stroke-width", (d: any) => 5 * d.weight)
        ;
}