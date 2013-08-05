// Closure
// Protecting value by scope

var myObject = function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}();

console.log(myObject.getValue());
myObject.increment();
console.log(myObject.getValue());
myObject.increment(3);
console.log(myObject.getValue());
myObject.increment('foo');
console.log(myObject.getValue());
console.log(myObject.value);

// No encapsulation
// value is a public attribute of the object

var myOpenObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function () {
        return this.value;
    }
};

console.log(myOpenObject.getValue());
myOpenObject.increment();
console.log(myOpenObject.getValue());
myOpenObject.increment(3);
console.log(myOpenObject.getValue());
myOpenObject.increment('foo');
console.log(myOpenObject.getValue());
console.log(myOpenObject.value);
