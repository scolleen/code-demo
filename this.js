var num = 1;

var myObj = {
  num: 2,
  add: function () {
    this.num = 3;
    (function () {
      console.log(this.num)
      this.num = 4
    })()
    console.log(this.num)
  },
  sub: function() {
    console.log(this.num)
  }
}

myObj.add() // 1 3
console.log(myObj.num) // 3
console.log(num) // 4
var sub = myObj.sub
sub(); // 4


// 第二题

function a() {
  var x = 10;
  return function b() {
    console.log(x)
  }
}

var c = a()
var x = 20;
c() // console.log(10)


var x = 10;
function a() {
  console.log(this)
  console.log(x)
}

var b = function (c) {
  console.log(this, 'b function')
  var x = 20;
  c();
}

b(a)