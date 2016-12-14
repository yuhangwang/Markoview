declare let d3: any;


/** update the curved edges */
export function
updateArcEdges(selector: string)
{   d3.selectAll(selector)
        .attr("d", (d: any) => 
            {   let dx = d.target.x - d.source.x,
                    dy = d.target.y - d.source.y,
                    dr = Math.sqrt(dx * dx + dy * dy);
                let tol: number = 1.0e-4;
                if (dr < tol) // self-loop
                {   return ["M", d.source.x, d.source.y,
                            "c -100 -100, 100 -100, 0 0"
                        ].join(" ");
                }
                else
                {   return [
                        "M", d.source.x, d.source.y,
                        "A", dr, dr, "0 0 1", d.target.x, d.target.y
                        ].join(" ")
                }
            }
        )
        ;
}