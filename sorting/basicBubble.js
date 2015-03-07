function sort_students(numbers) {
    
	 //var changed = false
	 for(var i=0; i<numbers.length; i++){
	 console.log("loop started")
	 	for(var j=1; j<=numbers.length; j++){
            
				if(numbers[j-1] > numbers[j]){// && !changed){
                var temp = numbers[j]
                numbers[j] = numbers[j-1]
                numbers[j-1] = temp
					//changed = true
					console.log(numbers[j-1], numbers[j])
            }
        }
    }
    console.log(numbers)
}

numbers = [5,3,5,2]
number = [1,9,4,5,7]
sort_students(number)
