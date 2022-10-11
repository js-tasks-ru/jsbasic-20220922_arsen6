function sumSalary(salaries) {
  let sum = 0;
  for( let prop in salaries ) {

  if ( Number(salaries[prop]) && isFinite (salaries[prop]) ) {
    sum += Number(salaries[prop]);
    }
  }
  return (sum);
}