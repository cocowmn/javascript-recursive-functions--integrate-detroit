
export const mergeSort = ( array: number[] ): number[] => {
  sort({ array, start: 0, end: array.length - 1 })
  return array
}

const sort = (
  { array, start, end }: {
    array: number[]
    start: number
    end: number
  }): number[] => {
    
    if( start >= end ) return array
    
    const midpoint = Math.floor( ( start + end ) / 2 )

    sort({ array, start, end: midpoint })
    sort({ array, start: midpoint + 1, end })

    return merge({ array, start, end })

  }

const merge = (
  { array, start, end }: {
    array: number[]
    start: number
    end: number
  }): number[] => {

    const leftStart = start
    const leftEnd = Math.floor( ( start + end ) / 2 )

    const rightStart = leftEnd + 1
    const rightEnd = end

    const size = rightEnd - leftStart
    const temp = new Array( size )

    let [ index_insert, index_left, index_right ]
      = [ 0, leftStart, rightStart ]
    
    while( index_left <= leftEnd && index_right <= rightEnd ) {
      if( array[ index_left ] <= array[ index_right ] )
        temp[ index_insert++ ] = array[ index_left++ ]
      else
        temp[ index_insert++ ] = array[ index_right++ ]
    }
    
    while( index_left <= leftEnd )
      temp[ index_insert++ ] = array[ index_left++ ]
    while( index_right <= rightEnd )
      temp[ index_insert++ ] = array[ index_right++ ]
    
    for( let index = start; index <= end; index++ )
      array[ index ] = temp[ index - start ]

    return array
  }
