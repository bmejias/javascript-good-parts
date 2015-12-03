require("../utils.js");

// Creation of a Mammal object
var Mammal = function (name) {
    this.name = name;
};

Mammal.prototype.get_name = function () {
    return this.name;
};

Mammal.prototype.says = function () {
    return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
console.log(myMammal.get_name());
console.log(myMammal.prototype === Mammal);  // false
console.log(myMammal.prototype === Mammal.prototype);  // false

var herMammal = new Mammal('Another herbivore');
console.log(myMammal.prototype === herMammal.prototype);  // true
// Creation of a Cat object
// At this point, Cat and Mammal are completely independent
// Object diagram is:
//     Mammal's prototype   <--- Mammal
//     Cat's prototype   <--- Cat
var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
};

// Replace Cat.prototype with a new instance of Mammal
Cat.prototype =  new Mammal();
console.log(Cat.prototype === Mammal);  // false
console.log(Cat.prototype === Mammal.prototype);  // false
console.log(Cat.prototype === myMammal.prototype);  // false
console.log(Cat.prototype.prototype === myMammal.prototype);  // true


