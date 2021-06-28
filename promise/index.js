// 1
// Promise.resolve(1)
// .then(res => {
//   console.log(res)
//   return 2
// }).catch(err => {
//   return 3
// }).then(res => {
//   console.log(res)
// })



// 2
// const  promise = new Promise((resolve, reject) => {
//   console.log('tag2', 1)
//   resolve()
//   console.log('tag2', 2)
// })

// promise.then(() => {
//   console.log('tag2', 3)
// })

// console.log('tag2', 4)



// 3
// const  promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })

// const promise2 = promise1.then(() => {
//   throw new Error('error !')
// })

// console.log('promise1', promise1)
// console.log('promise2', promise2)

// console.log('tag', 'xxxxx')

// setTimeout(() => {
//   console.log('promise1', promise1)
//   console.log('promise2', promise2)
// }, 2000)


// T4
// setTimeout(() => console.log(5), 0)

// new Promise(resolve => {
//   console.log(1)
//   resolve(3);
//   Promise.resolve().then(() => {
//     console.log(4)
//   })
// }).then(num => {
//   console.log(num)
// })

// console.log(2)



// T5
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('once')
//     resolve('success')
//   }, 1000)
// })

// const start = Date.now()

// promise.then(res => {
//   console.log(res, Date.now() - start)
// })

// promise.then(res => {
//   console.log(res, Date.now() - start)
// })


// T6
// Promise.resolve(33).then(res => {
//   return new Error('error !!!!')
// }).then((res) => {
//   console.log('then: ', res)
// }).catch(err => {
//   console.log('catch: ', err)
// })

// // 变种后 ????
// Promise.resolve(33).then(res => {
//   throw new Error('error !!!!')
// }).then((res) => {
//   console.log('then: ', res)
// }, (err) => {
//   console.error('fail', err)
// }).catch(err => {
//   console.log('catch: ', err)
// })


// T7
// const promise = Promise.resolve().then(() => {
//   return promise
// })

// promise.catch(console.error)


// T8
// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)

  


// var original = Promise.resolve(33);
// var cast = Promise.resolve(original);
// cast.then(function(value) {
//   console.log('value: ' + value);
// });

// T9
// Promise.resolve()
// .then(function success(res) {
//   throw new Error('error !!')
// }, function fail(err) {
//   console.log('fail: ', err)
// }).catch(function fail2(err) {
//   console.log('fail2', err)
// })

// 变种后

// Promise.resolve()
// .then(function success1(res) {
//   throw new Error('error')
// }, function fail1(err) {
//   console.error('fail1: ', err)
// })
// .then(function success2() {
//   // success2
// }, function fail2(err) {
//   console.error('fail2: ', err)
// })


// 查看到此

// T10
process.nextTick(() => {
  console.log('nextTick')
})
Promise.resolve()
.then(() => {
  console.log('then')
})

setImmediate(() => {
  console.log('setImmediate')
})

console.log('end')


// T11
// const first = () => (Promise((resolve, reject) => {
//   console.log(3)
//   let  p = new Promise((resolve, reject) => {
//     console.log(7)
//     setTimeout(() => {
//       console.log(5)
//       resolve(6)
//     }, 0)
//   })
//   resolve(1)
//   p.then((arg) => {
//     console.log(arg)
//   })
// }))

// first.then(res => {
//   console.log(res);
// })


// 12

// let p = new Promise((resolve, reject) => {
//   reject(Error('the fails!'))
// })

// p.catch(error => console.log(error.message))
// p.catch(error => console.log(error.message))


// T13
// let p = new Promise((resolve, reject) => {
//   return Promise.reject(Error('the fails!'))
// })

// p.catch(error => console.log(error.message))
// p.catch(error => console.log(error.message))

// T14
// let p14 = new Promise((resolve, reject) => {
//   reject(Error('the fails!'))
// })
// .catch(error => console.log(error, 'catch'))
// .then(error => console.log(error, 'then'))

// T15
// new Promise((resolve, reject) => {
//   resolve('success!')
// })
// .then(() => {
//   throw Error('on noes!')
// })
// .catch((error) => {
//   // console.log(error)
//   return 'actually, that works'
// })
// .catch(err => {
//   console.log(err.message)
// })

// T16 
// Promise.resolve('success')
// .then(res => {
//   return res.toUpperCase()
// })
// .then(data => {
//   console.log(data)
//   return data
// })
// .then(console.log)

// T17
// Promise.resolve('success')
// .then(() => {
//   throw Error('oh, ones!')
// })
// .catch(error => {
//   console.log(1)
//   return 'actually, that works'
// })
// .then(data => {
//   console.log(2)
//   throw Error('the fails!')
// })
// .catch(error => {
//   console.log(error.message)
// })

// T18
// const first = () => (new Promise((resolve, reject) => {
//   console.log(3)
//   let p18 = new Promise((resolve, reject) => {
//     console.log(7)
//     setTimeout(() => {
//       console.log(5)
//       resolve(6)
//     }, 0)
//     resolve(1)
//   })
//   resolve(2)
//   p18.then(arg => {
//     console.log(arg)
//   })
// }))

// first().then(arg => {
//   console.log(arg)
// })

// console.log(4)

// T19
// async function async1() {
//   console.log(1)
//   const result = await async2();
//   console.log(3)
// }
// async function async2() {
//   console.log(2)
// }

// Promise.resolve().then(() => {
//   console.log(4)
// })

// setTimeout(() => {
//   console.log(5)
// }, 0)

// async1()
// console.log(6)

