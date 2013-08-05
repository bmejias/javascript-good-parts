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

console.log('&lt;&quot;&gt;'.deentityify());
