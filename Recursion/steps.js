// a child is running up a staircase with n steps
// can hop 1,2, or 3 steps at a time
// implement a method to count how many possible ways the child can run up the staircase

var index = 0

function countWays(n){
  // console.log(n)
  if (n < 0)
    return 0
  else if (n == 0)
    return 1
  else
    return countWays(n-1) + countWays(n-2) + countWays(n-3)
}

console.log(countWays(5))
