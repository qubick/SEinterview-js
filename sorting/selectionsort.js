function selection_sort(v){

	var min = 100000
		,pos = 0

	for(var i=0; i<v.length; i++){
		for(var j=i; j<v.length; j++){
			if(v[j] < min)
				min = v[j]
				pos = j
		} 
		v[j] = v[i]
		v[i] = min
	}

	console.log(v)
}

v = [12, 4, 7, 8, 143, 2, 65, 34, 5]
selection_sort(v)
