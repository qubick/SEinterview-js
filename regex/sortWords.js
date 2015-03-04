function sort_words(s){
	var spliter = new RegExp("[,\s]");
	var obj = s.split(spliter)
		,newObj = []
		,cnt = 0
	
	for(var i=0; i<obj.length; i++){
		if(obj[i].match(/\S/g))
			newObj[cnt++] = obj[i].trim()
	}

//	newObj = newObj.sort(function(a,b){return b-a})
	console.log(newObj)
}

var s = " one, ,two three,4,"
sort_words(s)
