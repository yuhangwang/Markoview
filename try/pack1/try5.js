print = console.log;

const cards = [];
for (let suit of ['H', 'C', 'D', 'S'])
{   for (let value = 1; value <= 13; value++)
    {   cards.push({suit, value})
    }
}

print(cards.filter( c => c.value === 2));
print(cards.filter(c => c.suit === 'D'));
