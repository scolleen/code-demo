function throttle(func, delay) {
  let timer = null
  let start = new Date()
  return function (...rest) {
    timer && clearTimeout(timer)
    if (new Date - start >= delay) {
      func.apply(this, rest)
      start = new Date()
    } else {
      setTimeout(() => {
        func.apply(this, rest)
      }, delay)
    }
  }
}