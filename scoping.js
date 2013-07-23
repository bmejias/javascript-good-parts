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
