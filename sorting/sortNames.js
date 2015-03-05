//******************************
// given array of names with first and last name,
// sort by last name
// print in sorted order
// first and last name is always separated in white space
//******************************

function long_sortNames(names){

	var arr = []
	var hash = []

	for(var i=0; i<names.length; i++){
		arr[i] = names[i].split(' ')[1]
		hash[arr[i]] = names[i]
	}

	arr = arr.sort()

	for(var j=0; j<names.length; j++){
		console.log(hash[arr[j]])
	}
}

function short_sortNames(names){

	names = names.sort(function(n1, n2){
		return n1.split(' ')[1] > n2.split(' ')[1]
	})

	names.forEach(function (n) {
		console.log(n)
	})

}

var names = ["Ashley Yards", "Melissa Banks", "Martin Stove", "Erika Johnson", "Robert Jones"]

//short_sortNames(names)
long_sortNames(names)
