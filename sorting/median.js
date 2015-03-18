function get_median(A,B){

	var i=0
		,j=0
		,newArr = []

	while(i<A.length || j<B.length){
		if(A[i] < B[j]){
			newArr.push(A[i++])
		} else {
			newArr.push(B[j++])
		}

		if(i === A.length){
			while(j<B.length)
				newArr.push(B[j++])
			break;
		}

		if(j === B.length){
			while(i<A.length)
				newArr.push(A[i++])
			break;
		}
	}

	console.log(newArr[Math.floor(newArr.length/2)])
}

A = [5, 7, 9, 11, 15]
B = [1, 8]

get_median(A,B)
