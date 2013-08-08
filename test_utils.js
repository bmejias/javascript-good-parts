require("./utils.js");

String.method('deentityify', function() {
    // The entity table. It maps entity names to characters
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };

    // Return the deentityify method
    return function () {
        var replacement = function (a, b) {
            var r = entity[b];
            return typeof r === 'string' ? r : a;
        };
        return this.replace(/&([^&;]+);/g, replacement);
    };
}());

console.log('&lt;&quot;test&quot;&gt;'.deentityify());

var stooge = {
  'first-name': "Joe",
  'last-name': "Howard"
};

stooge.nickname = "Canelo";
var x = stooge;
x.nickname = "Curly";
var nick = stooge.nickname;
console.log("Reassigned through var x: " + stooge.nickname);

var another_stooge = Object.clone(stooge);
another_stooge['first-name'] = "Harry";
another_stooge['middle-name'] = "Moses";
another_stooge.nickname = "Moe";

console.log('------------------');
console.log("Value of the other stooge. Last name through prototype");
console.log("first-name: " + another_stooge['first-name']);
console.log("middle-name: " + another_stooge['middle-name']);
console.log("last-name: " + another_stooge['last-name']);
console.log("nickname: " + another_stooge.nickname);
