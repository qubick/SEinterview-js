function main(){
	var str1 = "aaabbbbbbccccc"
	var str2 = str1
	var cur = str[0];
	var cnt = 1;
	var start = 0; 

	for(var i=1; i<str1.length; i++)
		if(str1[i] === cur) cnt++
		else{
			str1[start+1] = cnt.toString()
			cnt = 1
			start = i
		}
		//str1.trim()

		if (str2.length < str1.length)
			return str2
		else 
			return str1
}
