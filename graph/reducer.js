function reducer(docs){
	var hash = []
	var list = []

	docs.forEach(function(d){
		e = d.split(',')
		e.forEach(function(data){
			if(hash[data] === undefined){
				hash[data] = true
				list.push(data)
			}
		})
	})

	list.sort(function(a,b){return a-b})
	console.log(list.join(" "))
}

docs = ["13,23,34,5,51,24,78,9","234,2,3,4,7,43,12","91,22,331,2,323,34"]
reducer(docs)
