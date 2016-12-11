declare var jQuery: JQueryStatic;

export function
form2D(
        rows: number,
        columns: number,
        form_class: string = null,
        form_id: string = null,
        cell_class: string = null,
        cell_id: string = null,
        cell_value = 0)
{   let content = Array(rows)
        .fill(null)
        .map(() => Array(columns)
                .fill(null)
                .map(() => jQuery("<input>") 
                        .attr({class: cell_class})
                        .attr({id: cell_id})
                        .attr({value: cell_value}))
                .concat($("<br>")))
        .reduce((a: any[], x: any[]) => a.concat(x))
        ;

    return jQuery("<form>")
        .attr({class: form_class, id: form_id})
        .append(content)
        ;
}