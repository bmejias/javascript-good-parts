// The Towers of Hanoi

var hanoi = function (discs, src, aux, dest) {
    if (discs > 0) {
        hanoi (discs - 1, src, dest, aux);
        console.log("Move disc " + discs + " from " + src + " to " + dest);
        hanoi(discs - 1, aux, src, dest);
    }
};

console.log("-------------------------");
console.log(" Hanoi 2");
hanoi(2, 'Src', 'Aux', 'Dest');
console.log("-------------------------");
console.log(" Hanoi 3");
hanoi(3, 'Src', 'Aux', 'Dest');

// Tail Recursion

function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, i * a);
}

for (var i = 0; i < 12; i +=1) {
    console.log(i + "! = " + factorial(i));
}
