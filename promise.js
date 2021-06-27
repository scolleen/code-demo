var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('promise1');
  }, 3000);
});

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('promise2');
  }, 1000);
});

var time = Date.now();
Promise.race([promise1, promise2]).then(function (results) {
  console.log(results);
  console.log(Date.now() - time);
});