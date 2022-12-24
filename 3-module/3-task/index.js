function camelize(str) {
    let arr = str.split( "" );
  arr.forEach( function( item, index, array ) {
    if (item === '-') {
      array[ index + 1 ] = array[ index + 1 ].toUpperCase();
      array.splice( index, 1 );
    }
  });
  arr = arr.join( '' );
  return arr;
}
