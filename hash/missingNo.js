// given input array of min and max,
// find missing value between the two

function find_missing_number(v){

	var max = 0
	var hash = {}

	for(var i=0; i<v.length; i++){
		if(v[i]> max){
			max = v[i]
			//console.log(max)
		}
		hash[v[i]] = true
	}

	for(var j=1; j<max; j++)
		if(hash[j] != true)
		 	console.log(j)
}

v = [5, 4, 2, 6]
find_missing_number(v);
