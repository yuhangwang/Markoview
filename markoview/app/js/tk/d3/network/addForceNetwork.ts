declare let d3: any;
import {forceTick} from "./forceTick/forceTick.js";


/**
 * Add a force-balanced network plot
 * @param {any[]} nodes - a list of node objects {id: _, weight: _}
 * @param {any[]} edges - a list of edge objects {source: _, target: _, weight: _}
 */
export function
addForceNetwork(nodes: any[], edges: any[])
{   let weightScale = d3.scale.linear()
        .domain(d3.extent(edges, (d: any) => d.weight))
        .range([0.1, 1])
        ;

    let force = d3.layout.force()
        .linkStrength((d: any) => 0.1*weightScale(d.weight))
        .charge(-1000)
        .gravity(0.1)
        .size([500, 500])
        .nodes(nodes)
        .links(edges)
        .on("tick", forceTick)
        ;

    d3.select("svg")
        .selectAll("line.link")
        .data(edges, (d: any) => d.source.id + "-" + d.target.id)
        .enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("opacity", 0.5)
        .style("stroke-width", (d: any) => d.weight)
        ;
    console.log(d3.select("svg"));
    let nodeEnter = d3.select("svg")
        .selectAll("g.node")
        .data(nodes, (d: any) => d.id)
        .enter()
        .append("g")
        .attr("class", "node")
        ;

    nodeEnter.append("circle")
        .attr("r", 5)
        .style("fill", "lightgray")
        .style("stroke", "black")
        .style("stroke-width", "1px")
        ;

    nodeEnter.append("text")
        .style("text-anchor", "middle")
        .attr("y", 15)
        .text((d: any) => d.id)
        ;

    force.start();
}
