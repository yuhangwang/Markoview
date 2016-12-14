// Get the content of the form as a 1D array
export function
getArray(formId: string)
{   let array: number[] = [];

    jQuery(`#${formId}`)
    .contents()
    .each((i: number, item: any) => 
        {   if (item.nodeName == "INPUT")
            {   array.push(parseFloat(jQuery(item).val()));            
            }
            else {}
        }
    );
    
    return array;
}