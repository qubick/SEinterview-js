function count_words(s){
	var regx1 = /[;,]/g
	var obj = s.split(regx1)
	var cnt = 0

	for(var i=0; i<obj.length; i++)
		if(obj[i].match(/\S/))
			//console.log(obj[i])
			cnt++
	return console.log(cnt)
}

s = " one,,two,three,4,"
count_words(s)
