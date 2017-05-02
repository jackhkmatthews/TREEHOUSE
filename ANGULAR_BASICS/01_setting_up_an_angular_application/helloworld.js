var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        console.log("Hi, " + name);
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.greet('Jim'); //Hi, Jim
