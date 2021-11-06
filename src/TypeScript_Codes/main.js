var count = 3;
var isValid = true;
var fullName = "salim mehdi";
function getCount(value) {
    if (value != 0) {
        for (var i = 0; i < value; i++) {
            console.log(isValid);
            if (isValid) {
                count++;
            }
            isValid = !isValid;
        }
        console.log("the count is " + count + " " + fullName);
        return count;
    }
    else {
        return "The Input should not be A ZERO";
    }
}
;
//console.log(getCount(10));
//-------------------------------------------------------
var func1 = function (x, y) { return x + y; };
console.log(func1(1, 5));
var func2 = function (sum) { return sum.x + sum.y; };
console.log(func2({ x: "1", y: 9 }));
var func3 = function (sum) { return sum.x + sum.y; };
console.log(func3({ x: 3, y: 6 }));
var func4 = function (sumInterface) { return sumInterface.x + sumInterface.y; };
console.log(func4({ x: 3, y: 10 }));
