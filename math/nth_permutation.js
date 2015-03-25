//Given an array of integer numbers 
//print to the standard output the nth circular permutation to the right.
//Expected complexity: O(N)


function nth_perm(v, n){

	for(var i=0; i<v.length; i++){
		var temp = i%n -1
		if(temp === -1)
			temp = v.length-1
		console.log(v[temp])
	}
}

array = [7,1,2,4,5,6]
N = 4

nth_perm(array, N)
