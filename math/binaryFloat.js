function print_float(s){

	var arr = s.split('.')
		,dec = arr[0]
		,flo = arr[1]

	var sum = parseInt(arr[0], 2)

	for(var i=0; i<flo.length; i++){
		var temp = parseInt(flo[i])
		temp *= Math.pow(2,-(i+1))
		sum += temp
		//console.log(temp)
	}

	console.log(sum)
}

s = "100.0011"
print_float(s)
