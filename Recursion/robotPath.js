//a robot moves from (0,0) t0 (X,Y)
//count the number of possible path
function moveCnt(X, Y){ //let's move backward


  if((X == 0) && (Y == 0)){
    return 0
  } else if ((X == 0) && (Y > 0)){
    return 1
  } else if ((X > 0) && (Y == 0)){
    return 1
  }
  else{
    return moveCnt(X-1, Y) + moveCnt(X, Y-1)
  }
}


var count = moveCnt(2,2)
console.log(count)
