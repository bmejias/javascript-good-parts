Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

// This function is given as "create" in the book
if (typeof Object.clone !== 'function') {
  Object.clone = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}
