import { mergeSort } from './merge-sort'


test(
  'Calling MergeSort on a predetermined unsorted array returns a sorted array',
  () => {
    const f = mergeSort

    const input = [ 3, 9, 3, 2, 1, 5, 8, 7, 6, 0 ]
    const output = f( input )
    const expectedOutput = [ 0, 1, 2, 3, 3, 5, 6, 7, 8, 9 ]

    expect( output ).toEqual( expectedOutput )
  })

test(
  'Calling MergeSort on a randomly generated array returns an array sorted in ascending order',
  () => {
    const f = mergeSort

    const input = new Array( 2500 )
    const maxValue = 399113

    for( let i = 0; i < input.length; i++ ) 
      input[ i ] = Math.floor( Math.random() * maxValue )

    f( input )

    for( let i = 0; i < input.length - 1; i++ )
      expect( input[ i ] <= input[ i + 1 ] ).toBeTruthy()
  })
