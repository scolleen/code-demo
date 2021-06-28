// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class _Promise {
  constructor (executor) {
    this.status = PENDING
    this.value = null
    this.reason = null
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value

        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
      }

      // 依次将对应的函数执行
      this.onRejectedCallbacks.forEach(fn=>fn());
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }


  then(onFulfilled, onRejected) {
    console.log(this.status)
    console.log(onFulfilled)
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      })

      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}


let promise = new _Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('3333')
  }, 1000)
  // reject('reject')
})

promise.then(value => {
  console.log('success', value)
}, reason => {
  console.log('fail', reason)
})