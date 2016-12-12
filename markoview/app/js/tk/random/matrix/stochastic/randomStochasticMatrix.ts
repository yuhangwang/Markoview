declare let numeric: any;


export function
randomStochasticMatrix(size: number): number[][]
{    return numeric.random([size, size])
        .map((xs: number[]) =>
            numeric.div(xs, numeric.sum(xs)))
            ;
}