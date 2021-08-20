let allDeps: Array<any[] | undefined>= []
let effctCursor: number = 0;
function useEffect(callback: () => void, depArr?: any[]) {
  if (!depArr) {
    callback()
  }
}