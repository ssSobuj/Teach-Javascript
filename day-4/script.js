// named function

function myFunctionForMultiplies (p1, p2) {
  return p1 * p2;
}

function myFunctionForPlus (p1, p2) {
  return p1 + p2;
}

function myFunctionForMinus (p1, p2) {
  return p1 - p2;
}

function myFunctionForDivision (p1, p2) {
  return p1 / p2;
}


function myFunctionForAllCalculation (p1, p2, status) {

  if(status === 'plus'){
    return p1 + p2
  }

  if(status === 'minus'){
    return p1 - p2
  }

   if(status === 'division'){
    return p1 / p2
  }

  if(status === 'multiple'){
    return p1 * p2
  }


}

console.log(myFunctionForAllCalculation(5,6,'plus'));
console.log(myFunctionForAllCalculation(6,5,'minus'));
console.log(myFunctionForAllCalculation(10,2,'division'));
console.log(myFunctionForAllCalculation(10,2,'multiple'));



