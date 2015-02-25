function sort_location(a, b, c){
	var items = [a,b,c]

	var res = items.sort(function(a, b){
		return a-b
	})

	return console.log(res.join(''))
}

a = 100
b = 100
c = 23

sort_location(a, b, c)
