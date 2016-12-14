declare let d3: any;


/** update the position of the nodes */
export function
updateNodes(selector: string)
{   d3.selectAll(selector)
        .attr("transform",
            (d: any) => "translate(" + d.x + "," + d.y +")"
            )
        ;
}