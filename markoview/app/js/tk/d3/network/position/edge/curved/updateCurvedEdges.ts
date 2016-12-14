declare let d3: any;


/** update the curved edges */
export function
updateCurvedEdges(selector: string)
{   d3.selectAll(selector)
        .attr("d", (d: any) => 
            {   let dx = d.target.x - d.source.x,
                    dy = d.target.y - d.source.y,
                    dr = Math.sqrt(dx * dx + dy * dy);
                return "M" + 
                    d.source.x + "," + 
                    d.source.y + "A" + 
                    dr + "," + dr + " 0 0,1 " + 
                    d.target.x + "," + 
                    d.target.y;
            }
        )
        ;
}