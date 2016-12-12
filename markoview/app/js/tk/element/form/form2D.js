"use strict";
function form2D(rows, columns, form_class = null, form_id = null, cell_class = null, cell_id = null, cell_value = 0) {
    let content = Array(rows)
        .fill(null)
        .map(() => Array(columns)
        .fill(null)
        .map(() => jQuery("<input>")
        .attr({ class: cell_class })
        .attr({ id: cell_id })
        .attr({ value: cell_value }))
        .concat(jQuery("<br>")))
        .reduce((a, x) => a.concat(x));
    return jQuery("<form>")
        .attr({ class: form_class, id: form_id })
        .append(content);
}
exports.form2D = form2D;
//# sourceMappingURL=form2D.js.map