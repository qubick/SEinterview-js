function countOnes(n){
	var s = n.toString(2)
	var cnt = 0

	for(var i=0; i<s.length; i++){
		if(s[i] === '1')
			cnt ++
	}
	console.log(cnt)
}

n = 13
countOnes(n)
