function x() {
    var a = 18;
    function y() {
        console.log('a :>> ', a);
    }
    a = 100;
    return y;
}
var z = x();
console.log('z :>> ', z);
z(); // ??????
