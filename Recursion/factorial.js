//simple factorial

function factorial(n){

  if(n == 1) //end case
    return 1
  else
    return n * factorial(n-1)
}

console.log(factorial(5))
