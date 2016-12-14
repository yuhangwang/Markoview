declare let d3: any;

/** add arrow heads */
export function
addArrowHead(force: any)
{   let marker = d3.select("svg")
    .append("defs")
    .append("marker")
    .attr("id", "Triangle")
    .attr("refX", 12)
    .attr("refY", 6)
    .attr("markerUnits", "userSpaceOnUse")
    .attr("markerWidth", 12)
    .attr("markerHeight", 18)
    .attr("orient", "auto")
    .append("path")
    .attr("d", 'M 0 0 12 6 0 12 3 6')
    ;

    d3.selectAll("line")
        .attr("marker-end", "url(#Triangle)")
        ;
}
