print = console.log;
class
Person
{   constructor(name)
    {   this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const
jamie = new Person("Jamie"),
juliet = new Person("Juliet"),
peter = new Person("ePter"),
jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay];
print(arr.find(p => p.id === juliet.id));
print(this);

const arr2 = [5, 7, 12, 15, 17];
print(arr2.some(x => x%2 === 0));
print(arr2.some(x => Number.isInteger(Math.sqrt(x))));

