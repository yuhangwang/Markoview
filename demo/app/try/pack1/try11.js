let u1 = {name: 'u1'};
let u2 = {name: 'u2'};
let u3 = {name: 'u3'};
let userRoles = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin']
]);


print = console.log;
print(userRoles.has(u1));
print(userRoles.get(u1));

for (let [u, r] of userRoles)
{   console.log(`${u.name}: ${r}`)
}

print(userRoles.size);
print([...userRoles.values()]);