export function
array(n: number, f: any)
{   return Array(n).fill(null).map(f);
}