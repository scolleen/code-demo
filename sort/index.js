const arr = [ [1, 24, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

const baseArr = new Set()

const arrLoop = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    if (element.length > 0) {
      arrLoop(element)
    } else {
      baseArr.add(element)
    }
  }
}

// arrLoop(arr)
let targetArr = Array.from(baseArr).sort(function (m, n) {
  if (m < n) return -1
  else if (m > n) return 1
  else return 0
 })

console.log(arr.flat())



