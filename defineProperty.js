let obj = {}

Object.defineProperty(obj, 'props', {
  value: 'hello',
  enumerable: false,
  writable: false,
})
console.log(obj)

console.log(obj.props)


Object.defineProperties(obj, {
  'props': {
    value: 'world',
    enumerable: true,
    writable: true,
  },
  'prop': {
    value: 'prop',
    enumerable: false,
    writable: true,
  }
})

console.log(obj.props)