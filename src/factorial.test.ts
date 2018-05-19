import { factorial } from './factorial'

test(
  'Can retrieve correct factorial of 5',
  () => {
    const input = 5
    const expectedOutput = 120

    expect( factorial( input ) )
      .toBe( expectedOutput )
  })

test(
  'Can retrieve correct factorial of 0 through 12',
  () => {
    const input = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
    const output = input.map( value => factorial( value ) )
    
    const expectedOutput = [ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600 ]

    expect( output )
      .toEqual( expectedOutput )
  })
