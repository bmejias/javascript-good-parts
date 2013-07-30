// Rhino and Nodejs produce exactly the same result, so scoping is handled by
// both in the same way. 
//
// Code for Rhino - Convert console.log into a print
// var console = {
//     log: function(msg) {
//         print(msg);
//     }
// };

// Bad reference to variable i, where we are interested in the value of the
// variable at creation time of the function

var add_the_handlers_wrong = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            console.log(i);  // alert(i);
        };
    }
};

console.log("Bad Creation");
var nodes_i = [{}, {}, {}];
add_the_handlers_wrong(nodes_i);
for (var node in nodes_i) {
    nodes_i[node].onclick("event");
}

// Good creation, calling the creating function immediately with the value of i

var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i +=1 ) {
        nodes[i].onclick = function (k) {
            return function (e) {
                console.log(k);
            };
        }(i);
    }
};

console.log("--------------------------------------");
console.log("Better creation");
var nodes_ii = [{}, {}, {}];
add_the_handlers(nodes_ii);
for (var node in nodes_ii) {
    nodes_ii[node].onclick("event");
}

// Code from page 36

var foo = function () {
    var a = 3;
    var b = 5;
    var bar = function () {
        var b = 7;
        var c = 11;
        console.log("bar b: " + b);  // 7
        console.log("bar c: " + c);  // 11
        a += b + c;
        console.log("bar a: " + a);  // 21
    };

    console.log("foo a: " + a);  // 3
    console.log("foo b: " + b);  // 5
    bar();
    console.log("after bar() a: " + a);  // 3 !? wrong! this is 21
    console.log("after bar() b: " + b);  // 5
};

foo();
