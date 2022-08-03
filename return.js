function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}

var total = add(80, 20);
console.log('total: ', total)

function bringSingara(money) {
    var singaraPrice = 10;
    var quntity = money / singaraPrice;
    return quntity;
}
var myTk = 400;
var singars = bringSingara(myTk);
console.log('total singara : ', singars);