function reverse(){

	var str =  "reversestring\n"
	var len = str.length

	str = str.toString();

	console.log(str)
	
	for(var i=0; i<len/2; i++){
		var temp = str[i]
		//str[i] = str[len-i-1]
		str.replaceAt(i, str[len-i-1]);
		str[len-i-1] = temp
		console.log(str[i], str[len-i-1])
		//console.log('temp: ', temp);
	console.log(str)
	}
}
