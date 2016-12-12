export function
getMatrix(jqueryObj: any)
{   let matrix: number[][] = [];
    let ind = 0;
    
    jqueryObj
    .contents()
    .each((i: number, item: any) => 
        {   if (item.nodeName == "INPUT")
            {   if (!matrix[ind])
                {    matrix.push([]);
                }
                matrix[ind].push(parseFloat(jQuery(item).val()));            
            }
            else
            {    ind++;
            }
        }
    );
    return matrix;
}