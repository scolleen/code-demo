function debounce(func, delay) {
  let timer = null
  return function (...rest) {
    timer && clearTimeout(timer)
    setTimeout(() => {
      func.apply(this, rest)
    }, delay)
  }
}

function test() {
  console.log(3333)
}

debounce(test(), 4000)