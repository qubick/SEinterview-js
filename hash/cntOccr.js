//given the array, count how many times the number N occured
// expected time complesity: smaller than O(n)

function count_occurence(v, k){
	
	var hash = []

	for(var i=0; i<v.length; i++){
		if(hash[v[i]] === undefined)
			hash[v[i]] = 1
		else
			hash[v[i]] ++
	}

	console.log(hash[k])

}

v = [1, 2, 3, 3, 3, 3, 4, 4, 5, 4, 4, 6, 5]
k = 4

count_occurence(v,k)
