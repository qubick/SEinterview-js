// print courses found from both input arrays, in ascending order

function common_courses(courses1, courses2){

	courses2.sort(function(a,b){return a-b})
	var hash = []

	//construct hash in O(n)
	for(var i=0; i<courses1.length; i++){
		hash[courses1[i]] = true
	}

	for(var j=0; j<courses2.length; j++){
		if(hash[courses2[j]] === true){
			console.log(courses2[j])
			hash[courses2[j]] = false
		}
	}
}

var courses1 = [1,2,8,4,5,8,3]
var courses2 = [8,2,2,7,10]

common_courses(courses1, courses2)
