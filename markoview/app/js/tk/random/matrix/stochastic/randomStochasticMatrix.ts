declare let numeric: any;


export function
randomStochasticMatrix(rows: number, columns: number): number[][]
{    return numeric.random([rows, columns])
        .map((xs: number[]) =>
            numeric.div(xs, numeric.sum(xs)))
            ;
}