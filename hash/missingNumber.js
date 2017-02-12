// given input array of min and max,
// find missing value between the two

function missing(v){

  var min = 100
      ,max = 0
      ,hash = []

  for(var i=0; i<v.length; i++){
    if (min > v[i])
      min = v[i]
    if (max < v[i])
      max = v[i]

    hash[v[i]] = 1
  }

  console.log("(min, max) = (", min, ",", max, ")")

  for(var j=min+1; j<max; j++){
    if(hash[j] != 1)
      console.log(j)
  }
}

var v = [2,6,1,8,10]
missing(v)
