export const factorial = ( value: number ): number => {
  if( value === 0 || value === 1 ) return 1
  else return value * factorial( value - 1 )
}
