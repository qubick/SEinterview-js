function insertion_sort(v){

	for(var i=1; i<v.length; i++){
		for(var j=0; j<i; j++){
			var temp = v[i]
			if(temp < v[j]){
				v[i] = v[j]
				v[j] = temp
			}
		}
	}

	console.log(v)
}

var v = [5, 39, 2, 44, 23, 98, 3, 56]
insertion_sort(v)
