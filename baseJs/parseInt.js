let a = ['10','10','10','10','10'].map((item, index) => {
  console.log(item, index)
  return parseInt(item, index)
})

console.log(a)