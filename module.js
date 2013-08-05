// From the book:
//
// A module is a function or object that presents an interface but that hides
// its state and implementation. By using functions to produce modules, we can
// almost completely eliminate our use of global variables, thereby mitigating
// one of JavaScrtipt's worst features.

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

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
