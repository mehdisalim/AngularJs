var HelloWorld = /** @class */ (function () {
    function HelloWorld(message, count) {
        this.msg = "mehdi ";
        this.msg = message;
        this.count = count;
    }
    HelloWorld.prototype.getMessage = function () {
        if (this.count != undefined) {
            this.count = 10;
            return this.msg + "  " + this.count;
        }
        else {
            return this.msg + "  " + " we don't have any Count";
        }
    };
    return HelloWorld;
}());
//console.log(new HelloWorld("Hello World From MOROCCO").getMessage())
//console.log(new HelloWorld("Hello World From MOROCCO",20).getMessage())
//----------------------------------------------------------------------------------------------
var HelloWorld2 = /** @class */ (function () {
    function HelloWorld2(message, count) {
        this.message = message;
        this.count = count;
    }
    HelloWorld2.prototype.getMessage = function () {
        if (this.count != undefined) {
            this.count = 10;
            return this.message + "  " + this.count;
        }
        else {
            return this.message + "  " + " we don't have any Count";
        }
    };
    Object.defineProperty(HelloWorld2.prototype, "Count", {
        get: function () {
            return this.count;
        },
        set: function (count) {
            this.count = count;
        },
        enumerable: false,
        configurable: true
    });
    return HelloWorld2;
}());
var hellow = new HelloWorld2("hellow", 10);
console.log(new HelloWorld2("Hello World From MOROCCO", 10).getMessage());
hellow.Count = 30;
console.log(new HelloWorld2("Hello World From MOROCCO", hellow.Count).getMessage());
