console.log(!!1)
console.log(Boolean(1))
console.log(typeof(null))
let s = Symbol("a")
console.log(typeof(s))
console.log(s)
let [a, b, c] = [1, 2, 3]
console.log(a)
console.log(b)
console.log(c)

function g({a, b, c})
{   console.log(a)
    console.log(b)
    console.log(c)
}

g({a:1, b:2, c:3})