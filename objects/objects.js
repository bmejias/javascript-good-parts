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
var value = flight.equipment && flight.equipment.model
console.log("before: " + value);
flight.equipment = {
  model: 'Boeing 777'
};
value = flight.equipment && flight.equipment.model
console.log("after: " + value);
console.log("before: " + flight.status);
flight.status = 'overdue'
console.log("after: " + flight.status);
