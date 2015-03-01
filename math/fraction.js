//given a rational, decimal vale, write a function prints out the simplest possible faction

function compute_fraction(s){
	var arr = s.split('.')
		,num = parseInt(arr[0]*10) + parseInt(arr[1])
		,deno = 10

	if(!(num%5)) {
		num /=5
		deno /=5
	}
	if(!(num%2)){
		num /=2
		deno /=2
	}

	console.log(num+"/"+deno)
}

d = '1.6'
compute_fraction(d)
