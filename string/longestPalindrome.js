// given a string, find the longest palindrome
//
//    upper ->
//      |
//  n1 n2 n3 n4 n5 ...
//      |
//  <- lower
//
// move upper and lower index indicator in opposite direction
// break if character is different
// count if match, save pos and max count

function longest_palindrome(s){

	var cnt = []
		,max = 0
		,pos = 0

	for(var i=1; i<s.length; i++){
		for(var j=0; j<i; j++){
			if(i+j === s.length-1)
				break

			if(s[i-j] === s[i+j]){
				if(cnt[i] === undefined)
					cnt[i] = 1
				else
					cnt[i]++
			} else {
				break
			}
		}

		if(cnt[i] > max){
			max = cnt[i]
			pos = i
		}
	}
	console.log(s.substring(pos-max+1, pos+max))
}

s = "abcdxyzyxabcdaaa"
longest_palindrome(s)
