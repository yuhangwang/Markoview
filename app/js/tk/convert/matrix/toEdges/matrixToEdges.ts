/**
 * Convert a 2D square matrix to edges
 * @param {number[][]} matrix - input square matrix
 * @param {any[]} nodes - an array of node objects
 * @param {number} [s=null] - a scaling factor for each edge weight
 * @return {any[]} a list of obects {source: _, target: _, weight: _}
 */
export function
matrixToEdges(matrix: number[][], nodes: any[], s: number = null)
{   let edges: any = [];
    for (let i = 0; i < matrix.length; ++i)
    {   for (let j = 0; j < matrix[0].length; ++j)
        {   let w = (s === null) ? matrix[i][j]: matrix[i][j] * s;
            edges.push(
                {
                    source: nodes[i],
                    target: nodes[j],
                    weight: w
                }
            );
        }
    }
    return edges;
}
