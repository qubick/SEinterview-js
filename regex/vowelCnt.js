//given a string
//count the number of vowels in case no-tsensitive

function count_vowels(s){

/*
	var cnt = 0
	for(var i=0; i<s.length; i++){
		if(s[i].match(/[aeiou]/i))
			//console.log("white space found")
			cnt++
	}
	return console.log(cnt)
*/
	console.log(s.match(/[aeiou]/ig).length)
	// flag i for ignore case
	// flag g for find all occurence
}

s = "This Is sunday"
count_vowels(s)
