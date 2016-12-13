declare let d3: any;

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

    function forceTick()
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

    // add arrow heads
    let markder = d3.select("svg")
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
    d3.select("#controls")
        .append("button")
        .on('click', sizeByDegree)
        .html("Degree Size")
        ;
    function sizeByDegree()
    {   force.stop();
        d3.selectAll("circle")
            .attr("r", (d: any) => d.weight * 2)
            ;
    }

    // drag-able
    d3.selectAll("g.node")
        .call(force.drag())
        ;

    // fix nodes
    // d3.selectAll("g.node")
    //     .on("click", fixNode)
    //     ;

    // function fixNode(d: any)
    // {   d3.select(this)
    //         .select("circle")
    //         .style("stroke-width", 4);
    //     d.fixed = true;
    // }


    // filter network
    function filterNetwork(force: any)
    {   force.stop();
        let originalNodes = force.nodes();
        let originalLinks = force.links();
        let influentialNodes = originalNodes
            .filter((d: any) => d.followers > 20);
        let influentialLinks = originalLinks
            .filter((d: any) => {
                return influentialNodes.indexOf(d.source) > -1 &&
                    influentialNodes.indexOf(d.target) > 1;
            });

        d3.selectAll("g.node")
            .data(influentialNodes, (d: any) => d.id)
            .exit()
            .transition()
            .duration(4000)
            .style("opacity", 0)
            .remove()
            ;
        d3.selectAll("line.link")
            .data(influentialLinks, 
                (d: any) => `${d.source.id}-${d.target.id}`)
            .exit()
            .transition()
            .duration(3000)
            .style("opacity", 0)
            .remove()
            ;
        force.nodes(influentialNodes)
            .links(influentialLinks);

        force.start();
    }

    // filterNetwork(force);


    function addEdge(force: any)
    {   force.stop();
        let oldEdges = force.links();
        let nodes = force.nodes();
        let edge = {source: nodes[0], target: nodes[8], weight: 5};
        let newEdges = oldEdges.concat([edge]);
        force.links(newEdges);
        d3.select("svg")
            .selectAll("line.link")
            .data(newEdges, (d: any) => `${d.source.id}-${d.target.id}`)
            .enter()
            .insert("line", "g.nodes")
            .attr("class", "link")
            .style("stroke", "red")
            .style("stroke-width", 5)
            .attr("marker-end", "url(#Triangle)")
            ;
        force.start();
    }

    addEdge(force);


    // add nodes and edges
    function addNodesAndEdges(force: any)
    {    force.stop();
        let oldEdges = force.links();
        let oldNodes = force.nodes();
        let node1 = {id: 'raj', followers: 100, following: 67};
        let node2 = {id: "wu", followers: 50, following: 33};
        let edge1 = {source: oldNodes[0], target: node1, weight: 5};
        let edge2 = {source: oldNodes[0], target: node2, weight: 5};
        let newEdges = oldEdges.concat([edge1, edge2]);
        let newNodes = oldNodes.concat([node1, node2]);
        force.links(newEdges).nodes(newNodes);
        d3.select("svg")
            .selectAll("line.link")
            .data(newEdges, (d: any) => `${d.source.id}-${d.target.id}`)
            .enter()
            .insert("line", 'g.node')
            .attr("class", "link")
            .style("stroke", "red")
            .style("stroke-width", 5)
            .attr("marker-end", "url(#Triangle)")
            ;
        let nodeEnter = d3.select("svg")
            .selectAll("g.node")
            .data(newNodes, (d: any) => d.id)
            .enter()
            .append("g")
            .attr("class", "node")
            .call(force.drag())
            ;
        nodeEnter.append("circle")
            .attr("r", 5)
            .style("fill", "red")
            .style("stroke", "darkred")
            .style("stroke-width", "2px")
            ;
        nodeEnter.append("text")
            .style("text-anchor", "middle")
            .attr("y", 15)
            .text((d: any) => d.id)
            ;
        force.start();
    }
    addNodesAndEdges(force);


    function manuallyPositionNodes(force: any)
    {   let xExtent = d3.extent(
            force.nodes(), 
            (d: any) => parseInt(d.followers)
            );

        let yExtent = d3.extent(
            force.nodes(),
            (d: any) => parseInt(d.following)
            );

        let xScale = d3.scale
            .linear()
            .domain(xExtent)
            .range([50, 450])
            ;
        let yScale = d3.scale
            .linear()
            .domain(yExtent)
            .range([450, 50])
            ;
        force.stop();
        d3.selectAll("g.node")
            .transition()
            .duration(1000)
            .attr("transform", 
                (d: any) => 
                `translate(${xScale(d.followers)}, ${yScale(d.following)})`
            );
        d3.selectAll("line.link")
            .transition()
            .duration(1000)
            .attr("x1", (d: any) => xScale(d.source.followers))
            .attr("y1", (d: any) => yScale(d.source.following))
            .attr("x2", (d: any) => xScale(d.target.followers))
            .attr("y2", (d: any) => yScale(d.target.following))
            ;
        let xAxis = d3.svg
            .axis()
            .scale(xScale)
            .orient("bottom")
            .tickSize(4)
            ;
        let yAxis = d3.svg
            .axis()
            .scale(yScale)
            .orient("right")
            .tickSize(4)
            ;
        d3.select("svg")
            .append("g")
            .attr("transform",
                `translate(0,460)`)
            .call(xAxis)
            ;
        d3.select("svg")
            .append("g")
            .attr("transform",
                `translate(460,0)`)
            .call(yAxis)
            ;
        d3.selectAll("g.node")
            .each((d: any) => {
                d.x = xScale(d.followers);
                d.px = xScale(d.followers);
                d.y = yScale(d.following);
                d.py = yScale(d.following);
            });
    }

    manuallyPositionNodes(force);
}
