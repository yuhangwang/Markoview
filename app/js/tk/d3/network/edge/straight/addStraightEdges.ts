declare let d3: any;


/** add straight network edges */
export function
addStraightEdges(svgId: string, edges: any[])
{   d3.select(`#${svgId}`)
        .selectAll("line.link")
        .data(edges, (d: any) => d.source.id + "-" + d.target.id)
        .enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("opacity", 0.2)
        .style("stroke-width", (d: any) => 5 * d.weight)
        ;
}
