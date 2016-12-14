import {arrayToString} from "../../array/toString/arrayToString.js";


export function
matrixToString(m: number[][])
{    return m.map(arrayToString).join("\n");
}
