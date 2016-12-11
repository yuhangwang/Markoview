print = console.log;
const cart = [ {name: 'Widget', price: 9.95}, 
    {name: 'Gadget', price: 22.95}];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x * 0.8);
print(names);
print(prices);
print(discountPrices);
const lcNames = names.map(x => x.toLowerCase());
print(String.prototype.toLowerCase.apply("ABC"));
print(lcNames);
