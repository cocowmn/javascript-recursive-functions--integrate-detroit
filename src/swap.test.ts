import { swap } from './swap'


test(
  'Calling swap on locations in an array swaps their locations in the original array',
  () => {
    const f = swap
    const [ index1, index2 ] = [ 1, 2 ]

    const input = [ 0, 5, 10, 15 ]
    const expectedOutput = [ 0, 10, 5, 15 ]

    f({ array: input, index1, index2 })

    expect( input ).toEqual( expectedOutput )
  })