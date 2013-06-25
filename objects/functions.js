// Creating functions

var add = function (a, b) {
  return a + b;
};

// The method invocation pattern

console.log("the method invocation pattern");
var myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

myObject.increment("tres");
console.log(myObject.value);

// The function invocation pattern

console.log("-------------");
console.log("Function invocation pattern");
var sum = add(3, 4);
console.log(sum);

// Augment myObject with a double method

myObject.double = function () {
  var that = this;  // Workaround

  var helper = function () {
    that.value = add(that.value, that.value);
  };

  helper();  // Invoke helper as a function
};

console.log("going to double " + myObject.value);
myObject.double();
console.log("got " + myObject.value);

// Without the that workaround

myObject.badDouble = function () {
  this.value = add(this.value, this.value);
};

console.log("going to use the bad double from " + myObject.value);
myObject.badDouble();
console.log("to " + myObject.value);  // mmmh... I don't get it

var myOtherObject = {
  value: 21,

  showDouble: function () {
    myObject.badDouble();
    console.log("from myOtherObject: " + myObject.value);
  }
};
myOtherObject.showDouble();

// The constructor invocation pattern

var Quo = function (string) {
  this.status = string;
};

// Give all instances of Quo a public method to call get_status

Quo.prototype.get_status = function () {
  return this.status;
};

// Make an instance of Quo

console.log("-------------");
console.log("Testing objects created with constructor");
var myQuo = new Quo("confused");
console.log(myQuo.get_status());

console.log("-------------");
console.log("Using the apply invocation pattern");
var array = [3, 4];
var sum = add.apply(null, array);
console.log("Sum after apply: " + sum);

var statusObject = {
  status: 'A-OK'
};

// Reusing code without using inheritance/delegation

var status = Quo.prototype.get_status.apply(statusObject);
console.log("retrieving status with apply: " + status);

var badStatusObject = {
  s: 'foo'
};
var s = Quo.prototype.get_status.apply(badStatusObject);
console.log("It won't work if 'status' is not a property: " + s);
