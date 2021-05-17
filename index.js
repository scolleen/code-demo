console.log('start:', new Date().getTime() / 1000)

const input = (key) => new Promise((resolve, resject) => {
  console.log(1)
  console.log('key', key)
  setTimeout(() => resolve(key), 4000)
  console.log(2)
})

input('go').then(res => {
  console.log('1:', new Date().getTime()/ 1000)
  console.log(res)
})

setTimeout(() => {
  console.log('6000', new Date().getTime()/ 1000)
  input('go1').then(res => {
    console.log(res)
  })
  console.log('60002', new Date().getTime()/ 1000)
  
}, 6000)

setTimeout(() => {
  console.log('tiem:', new Date().getTime()/ 1000)
  input('go2').then(res => {
    console.log(res)
  })
}, 600)