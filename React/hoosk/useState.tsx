let stateArray = []
let index = 0;
function useState<T>(initState: T): [state: T, setState: (newState: T) => void] {
  
  let state = stateArray[index] || initState
  let setState = (newState) => {
    state = newState
  }
  index++

  return [state, setState]
}