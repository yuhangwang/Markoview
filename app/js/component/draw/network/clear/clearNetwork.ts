/** remove the content of an SVG node */
export function
clearNetwork(svgId: string)
{    d3.select(`#${svgId}`)
        .selectAll("*")
        .remove()
        ;
}
