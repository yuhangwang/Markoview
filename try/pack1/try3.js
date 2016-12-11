print = console.log;
const arr = [4, 6, 16, 36];
print(arr.every( x => x%2 === 0));
print(arr.every(x => Number.isInteger(Math.sqrt(x))));
