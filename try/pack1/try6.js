let print = console.log;
function cardToString(c)
{   let suits = {"H":"\u2665", "C":"\u2663",
        "D": "\u2666", "S": "\u2660"
        };
    let values = {"1": "A", "11": "J", "12": "Q", "13": "K"};
    for (let i = 2; i <= 10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
}

const cards = [];
for (let suit of ["H", "C", "D", "S"])
{   for (let value = 1; value <= 13; value++)
    {   cards.push({suit, value})
    }
}


let deck1 = cards.filter(c => c.value === 2)
    .map(cardToString);
print(deck1);

let deck2 = cards.filter(c => c.value > 10 && c.suit === "H")
    .map(cardToString);
