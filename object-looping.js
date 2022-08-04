var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

///get propaty
const keys = Object.keys(shoppingCart);
console.log(keys);

//get values
const values = Object.values(shoppingCart);
console.log(values);

for (var i = 0; i < keys.length; i++) {
    var propaityName = keys[i];
    var propartyValue = shoppingCart[propaityName];
    console.log(propaityName, propartyValue);
}

//for in loop
for (var propaityName in shoppingCart) {
    const values = shoppingCart[propaityName];
    console.log(propaityName, values);
}