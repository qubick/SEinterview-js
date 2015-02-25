function remove_substring(s, p, n){
/*
	var str = s.split('')
	for (var j=0; j<n; j++){
		for (var i=p; i<s.length; i++){
			str[i-1] = str[i];
		}
		str[s.length-i-j] = ''
	}
	console.log(str.join(""))
	*/

	console.log(s.substring(0,p-1)+s.substring(p+n-1,s.length))
}

s = "abcdefghi"
p = 4
n = 3

remove_substring(s, p, n)
