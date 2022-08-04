var student = {
    id: 101,
    name: 'Farvez',
    class: 10,
    phoneNumber: '01640184044'
}

console.log(student);
console.log(student.name);

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

//get propaty Value start
var penCount = shoppingCart.pen;
// console.log(penCount);

var keyboardCount = shoppingCart['keyboard'];
// console.log(keyboardCount);

var propaityName = 'mouse';
var propaityValue = shoppingCart[propaityName];
// console.log(propaityName, propaityValue);
//get propaty Value end

// set propoty start 
var sunglassCount = shoppingCart.sunglass = 15;
console.log(sunglassCount);
shoppingCart['sunglass'] = 29;
console.log(sunglassCount);
shoppingCart[propaityName] = 89;
console.log(shoppingCart);

var propatices = Object.keys(shoppingCart);
// console.log(propatices);

var propaticesValue = Object.values(shoppingCart);
// console.log(propaticesValue);

// console.log(shoppingCart);