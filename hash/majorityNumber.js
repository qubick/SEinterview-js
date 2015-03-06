function majority(v) {
    // Write your code here
    // To print results to the standard output please use console.log()
    // Example: console.log("Hello world!");
    var hash = []
    var max = 0, pos = 0
    for(var i=0; i<v.length; i++){
	 	if(hash[v[i]] === undefined)
			hash[v[i]] = 0

        if(++hash[v[i]] > max){
            max = hash[v[i]]
            pos = v[i]
        }
    }
    
    console.log(pos)  
}

input = [726, 749, 11, 11, 11, 11, 757, 11, 11, 11, 107, 547]
majority(input)
