//search sqrt value without using math library

function sqrt(n){
	
	for(var i=1; i<n/2; i++){
		var prev = i*i
		var curr = (i+1)*(i+1)

		if((n>prev) && (n<curr))
			console.log(i)
	}
}

n = 17
sqrt(n)
