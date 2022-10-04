function truncate( str, i ) {
  if ( str.length > i) {
    return str.slice( 0, i - 1 ) + '…';
  }
  return str;
}
