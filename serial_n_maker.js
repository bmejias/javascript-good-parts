require("./utils.js");

// Important: Variables prefix and seq are
// private to the closure. No 'this' or 'that' has been used. Therefore, the
// attributes cannot be accessed by inheritance either. They really remain
// private to the closure.

var serial_maker = function () {
    var prefix = '';
    var seq = 0;
    
    return {
        set_prefix: function(p) {
            prefix = String(p);
        },
        set_seq: function(s) {
            seq = s;
        },
        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};

var sequer = serial_maker();
console.log("Setting prefix and sequencer");
sequer.set_prefix('Q');
sequer.set_seq(1000);
console.log("Getting unique serial numbers");
console.log(sequer.gensym());
console.log(sequer.gensym());
console.log(sequer.gensym());
console.log("But not so unique");
sequer.set_seq(1000);
console.log(sequer.gensym());
console.log(sequer.gensym());
console.log(sequer.gensym());

// We will create a safer sequencer that doesn't allow to set the seed again.
// The method set_seq will be a one shot method.
// We will use delegation (by cloning a prototype) to reuse the previous code.

var safer_serial_maker = function () {
    var sequer = serial_maker();
    // var Sequer_wrapper = function () { };
    // Sequer_wrapper.prototype = sequer;
    // var s_sequer = new Sequer_wrapper();
    var s_sequer = Object.clone(sequer);

    s_sequer.set_seq = function (seed) {
        sequer.set_seq(seed);
        s_sequer.set_seq = function (seed) {
            console.log("Seed already set! This operation can't be run again");
        };
    };
    return s_sequer;
};

var s_sequer = safer_serial_maker();
console.log("Setting prefix and sequencer");
s_sequer.set_prefix('Q');
s_sequer.set_seq(1000);
console.log("Getting unique serial numbers");
console.log(s_sequer.gensym());
console.log(s_sequer.gensym());
console.log(s_sequer.gensym());
console.log("Trying to reseed again to 1000");
s_sequer.set_seq(1000);
console.log(s_sequer.gensym());
console.log(s_sequer.gensym());
console.log(s_sequer.gensym());
console.log("Now they are really unique");
