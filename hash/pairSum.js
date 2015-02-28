function pairSum(v, sum){
	
	var index = []

	//o(n)
	for(var i=0; i<v.length; i++){
		if(index[sum-v[i]] !== undefined){
			console.log(1)
			return
		} else
			index[v[i]] = true
	}
	console.log(0)
}

v = [2,2,20,18]
sum = 22

pairSum(v,sum)
