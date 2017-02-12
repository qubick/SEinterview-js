// find the number of pairs in the array
// the pair that makes given sum

function pairSum(v, sum){ //return true or false

	var index = []
			,cnt = 0

	//o(n)
	for(var i=0; i<v.length; i++){
		if(index[sum-v[i]] !== undefined){
			console.log(1)
			return
		}
		else {
			index[v[i]] = true
		}
	}
	console.log(0)
}


function pair(v, sum){
  var newArr = []
			,hash = [], hash1 = []
      ,cnt = 0

	for(var x=0; x<v.length; x++)
		if(hash1[v[x]] == undefined){
			newArr.push(v[x])
			hash1[v[x]] = true
		}

	console.log(newArr)

  for(var i=0; i<newArr.length; i++){
    hash[newArr[i]] = sum - newArr[i]
  }

  for(var j=0; j<newArr.length; j++){
    for(var k=j+1; k<newArr.length; k++)
      if(hash[newArr[j]] == newArr[k])
        cnt++
  }

  console.log(cnt)
}



v = [2,2,20,18,4,16,6,6]
sum = 22

pair(v, sum)
