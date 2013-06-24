var empty_object = {};

var stooge = {
  'first-name': "Joe",
  'last-name': "Howard"
};

var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  }
};

console.log("reading properties");
console.log(stooge['first-name']);
console.log(flight.departure.IATA);
console.log('------------------');

console.log("Everything should be undefined");
console.log(stooge['middle-name']);
console.log(flight.status);
console.log(stooge['FIRST-NAME']);
console.log('------------------');

console.log("Testing undefined combined with or for default value");
var middle = stooge['middle-name'] || "(none)";
var status = flight.status || "unkown";
console.log(middle);
console.log(status);
console.log('------------------');

console.log("Testing errors");
console.log(flight.equipment);
try {
  console.log(flight.equipment.model);
} catch (e) {
  console.log("exception catched\nname: " + e.name);
  console.log("message: " + e.message);
}
console.log("Testing the && operator");
console.log(flight.equipment && flight.equipment.model);
console.log('------------------');

console.log("Testing update");
console.log("before: " + stooge['first-name']);
stooge['first-name'] = "Jerome";
console.log("after: " + stooge['first-name']);
console.log("before: " + stooge['middle-name']);
stooge['middle-name'] = "Lester";
console.log("after: " + stooge['middle-name']);
console.log("before: " + stooge.nickname);
stooge.nickname = "Curly";
console.log("after: " + stooge.nickname);
var value = flight.equipment && flight.equipment.model;
console.log("before: " + value);
flight.equipment = {
  model: 'Boeing 777'
};
value = flight.equipment && flight.equipment.model;
console.log("after: " + value);
console.log("before: " + flight.status);
flight.status = 'overdue';
console.log("after: " + flight.status);

// Reference

console.log('------------------');
stooge.nickname = "";
console.log("Emptying nickname value: " + stooge.nickname);
var x = stooge;
x.nickname = "Curly";
var nick = stooge.nickname;
console.log("Reassigned through var x: " + stooge.nickname);

console.log('------------------');
var a = {}, b = {}, c = {};
a.foo = "bar";
b.bla = "bla";
console.log("all different");
console.log("b.foo: " + b.foo);
console.log("c.bla: " + c.bla);

console.log('------------------');
console.log("all equals");
a = b = c = {};
a.foo = "bar";
b.bla = "bla";
console.log("b.foo: " + b.foo);
console.log("c.bla: " + c.bla);

// Prototype

if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}
var another_stooge = Object.create(stooge);
another_stooge['first-name'] = "Harry";
another_stooge['middle-name'] = "Moses";
another_stooge.nickname = "Moe";

console.log('------------------');
console.log("Value of the other stooge");
console.log("first-name: " + another_stooge['first-name']);
console.log("middle-name: " + another_stooge['middle-name']);
console.log("nickname: " + another_stooge.nickname);

console.log('------------------');
stooge.profession = 'actor';
console.log("Profession delegated");
console.log(stooge.nickname + ": " + stooge.profession);
console.log(another_stooge.nickname + ": " + another_stooge.profession);
console.log("Profession override");
another_stooge.profession = "best actor";
console.log(another_stooge.nickname + ": " + another_stooge.profession);

// Reflection

console.log('------------------');
console.log("Getting types of object attributes");
console.log(typeof flight.number);
console.log(typeof flight.status);
console.log(typeof flight.arrival);
console.log(typeof flight.manifest);
console.log(typeof flight.toString);
console.log(typeof flight.constructor);
console.log(typeof flight);

console.log("Checking if the object hasOwnProperty");
console.log(flight.hasOwnProperty('number'));
console.log(flight.hasOwnProperty('constructor'));

// Enumeration

console.log('------------------');
console.log("Enumerating another stooge's properties");
var name;
for (name in another_stooge) {
  if (typeof another_stooge[name] !== 'function') {
    console.log(name + ': ' + another_stooge[name]);
    // Use [] instead of . becuase 'name' isn't a property of the object
    // console.log(name + ': ' + another_stooge.name);
  }
}

console.log('------------------');
console.log("Order guaranteed by enumerating using an array");
var i;
var properties = [
  'first-name',
  'middle-name',
  'last-name',
  'profession'
  ];
for (i = 0; i < properties.length; i += 1) {
  console.log(properties[i] + ':' + another_stooge[properties[i]]);
}
