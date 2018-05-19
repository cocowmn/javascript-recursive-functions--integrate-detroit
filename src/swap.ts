export const swap = (
  { array, index1, index2 }: {
    array: number[]
    index1: number
    index2: number
  }): number[] => {
    [ array[ index1 ], array[ index2 ] ] 
      = [ array[ index2 ], array[ index1 ] ]
    return array
  }
  