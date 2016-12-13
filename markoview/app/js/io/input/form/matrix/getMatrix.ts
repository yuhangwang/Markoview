// Get the content of the form as a 2D matrix
export function
getMatrix(formId: string)
{   let matrix: number[][] = [];
    let ind = 0;
    
    jQuery(`#${formId}`)
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