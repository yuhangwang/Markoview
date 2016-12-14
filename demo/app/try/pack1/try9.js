print = console.log
const arr = [1, null, "hello", "world", true, undefined]
delete arr[3]
print(arr.join())
print(arr.join(''))
print(arr.join(' -- '))