//write a function that convert integer into binary expression

function convertBinary(n){
	
	var s = ''
	while(n>1){
		s = (n%2) + s
		n = Math.floor(n/2)
	}

	s = '1' + s //the first digit is always 1

	return console.log(s)

}

n = 156
convertBinary(n)
