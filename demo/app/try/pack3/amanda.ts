export function 
calculate(a: number, x: number, n:number)
{   if (x === 1) return a * n;
    return a * (1 - Math.pow(x, n))/(1-x);
}
