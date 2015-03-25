//given a string and a substring of it
//find the position where the substring occured in original string

function find_substr(s,t){

	var pos = 0

	for(var i=0; i<t.length; i++){
		if(t[i] != s[0])
			; //pass
		else{
			for(var j=0; j<s.length; j++){
				if(s[j] != t[i+j]){
					break
				}else{
					if(j === s.length-1)
						pos = i+1
				}
			}
		}
		if(pos !=0)
			break
	}

	if(pos === 0)
		console.log(-1)
	else
		console.log(pos)
}

function find_substr_short(s,t){

	var p = t.indexOf(s)
	if(p > -1)
		return console.log(p+1)
	else
		return consol.log(-1)
}

s = "fab"
t = "abcdefabcdef"

//find_substr(s,t)
find_substr_short(s,t)
