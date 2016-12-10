d3.select("#someDiv").style("border", "5px darkgray dashed");
d3.select("#someDiv").attr("id", "newID");
d3.select("#someCheckbox").property("checked", true);

console.log("log 1")
let A = [[1, 2, 3], [4, 5, 6]]
let x = [7, 8, 9]
console.log(numeric.dot(A, x))
let B = numeric.dot(A, A)
for (let i=0; i < 3; ++i)
{   for (let j=0; j < 3; ++i)
    {   console.log(B[i][j]);
    }
}