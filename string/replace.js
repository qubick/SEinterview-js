function main(){
	var input = 'Mr John Smith      ';
	var len = 13;

	for (var i=len-2; i>0; i--)
		if(input[i] == ' '){
			for(var j=len+1; j>i; j--){
				input[j] = input[j-1]
				//input.replaceAt(j, input[j-1])
				console.log(input[j], input[j-1])
			}
			input[i] = '%'
			input[i+1] = '2'
			input[i+2] = '0'
		}
	console.log(input);
}

main()
