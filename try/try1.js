print = console.log;

const arr = ["b", "c", "d"];
arr.push("e"); print(arr);
arr.pop(); print(arr);
arr.unshift("a"); print(arr);
arr.shift(); print(arr);

const arr1 = [1, 2, 3];
print(arr1.concat(4, 5, 6));
print(arr1.concat([4, 5, 6]));
print(arr1.concat([4, 5], 6));
print(arr1.concat([4, [5, 6]]));

const arr2 = [1, 2, 3, 4, 5];
print(arr2.slice(3));
print(arr2.slice(2, 4));
print(arr2.slice(-2));
print(arr2.slice(1, -2));
print(arr2.slice(-2, -1));

const arr3 = [1, 5, 7];
print(arr3.splice(1, 0, 2, 3, 4));
print(arr3);
print(arr3.splice(5, 0, 6));
print(arr3);
print(arr3.splice(1, 2));
print(arr3);
print(arr3.splice(2, 1, 'a', 'b'));
print(arr3);

const arr4 = [1, 2, 3, 4];
arr4.copyWithin(1, 2); print(arr4);
arr4.copyWithin(2, 0, 2); print(arr4);
arr4.copyWithin(0, -3, -1); print(arr4);

const arr5 = new Array(5).fill(1);
print(arr5);
arr5.fill('a'); print(arr5);
arr5.fill('b', 1); print(arr5);
arr5.fill('c',2, 4); print(arr5);
arr5.fill(5.5, -4); print(arr5);
arr5.fill(0, -3, -1); print(arr5);

const arr6 = [1, 2, 3, 4, 5];
arr6.reverse(); print(arr6);
arr6.sort(); print(arr6);

const arr7 = [
    { name: "Suzanne" }, 
    { name: "Jim" },
    { name: "Trevor" },
    { name: "Amanda" } ];
arr7.sort(); print(arr7);
arr7.sort((a, b) => a.name > b.name); print(arr7);
arr7.sort((a, b) => a.name[1] < b.name[1]); print(arr7);

print(arr7.indexOf({name: "Jim"}));
print(arr6.indexOf(2));
print(arr7.findIndex(o => o.name === "Jim"));
print(arr7.find(o => o.name === "Jim"));

const arr8 = [1, 17, 16, 5, 4]
print(arr8.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));