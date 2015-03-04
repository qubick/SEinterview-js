//*******************************************
// find pair product (any combination of two elements) from the given array
// which is divisible by 3
// which is the greatst among them
//*******************************************

function max_prod(v){

	v.sort(function(a,b){return b-a});


	if(!v[0]%3)
		console.log(v[0]*v[1])
	else{
		for (var i=1; i<v.length-1; i++){
			for(var j=i+1; j<v.length; j++){
				if(!(v[i]*v[j]%3)){
					return console.log(v[i]*v[j])
				}
			}
		}
	}
}
v = [6, 8, 8, 7, 2, 5]
max_prod(v)
