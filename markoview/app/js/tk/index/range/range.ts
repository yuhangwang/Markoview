export function
range(start: number, stop: number = null, step: number = 1)
{   if (stop === null) { [start, stop] = [0, start]; }
    else {}

    let output: number[] = [];
    for (let i = start; i < stop; i += step)
    {    output.push(i)
    }
    return output;
}