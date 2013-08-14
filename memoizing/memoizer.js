// Generic memoizing function

var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};

// Creating fibonacci using the memoizer
var fibonacci = memoizer([0, 1], function (shell, n) {
    return shell(n -1) + shell(n - 2);
});

// Testing the Fibonacci
for (var i = 0; i <= 40; i += 1) {
    console.log('// ' + i + ': ' + fibonacci(i));
}

// Creating factorial using the memoizer
var factorial = memoizer([1, 1], function (shell, n) {
    return n * shell(n - 1);
});

// Testing the Factorial
for (var i = 0; i <= 40; i += 1) {
    console.log('// ' + i + ': ' + factorial(i));
}
