function getMinMax(str) {
  let arr = str
  .split( " " )
  .map( item => +item )
  .filter( function( a ){ return !( a !== a ); } );
  let minmax = {min: Math.min( ...arr ),
  max: Math.max( ...arr )}

return minmax
}
