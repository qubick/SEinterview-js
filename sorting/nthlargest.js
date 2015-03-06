function nth_largestNum(v, n){

	v = v.sort(function(a,b){return b-a})

	return console.log(v[n-1])
}

v = [2,3,77,8,4,9,10]
n = 7

nth_largestNum(v,n)
