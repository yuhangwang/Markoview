declare let d3: any;

export function
forceTick()
{   d3.selectAll("line.link")
        .attr("x1", (d: any) => d.source.x)
        .attr("x2", (d: any) => d.target.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("y2", (d: any) => d.target.y)
        ;

    d3.selectAll("g.node")
        .attr("transform",
            (d: any) => "translate(" + d.x + "," + d.y +")"
            )
        ;
}