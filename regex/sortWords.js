// given strings of mixed numbers,
// sort words in lexically order


function sort_words(s){
	//var spliter = new RegExp("[,\s]");
	var obj = s.split(/[\s,]/g)
		,newObj = []
		,cnt = 0
	
	for(var i=0; i<obj.length; i++){
		if(obj[i].match(/\S/g))
			newObj[cnt++] = obj[i].trim()
	}

	newObj = newObj.sort()
	console.log(newObj)
}

var s = " one, ,two three,4,"
sort_words(s)
