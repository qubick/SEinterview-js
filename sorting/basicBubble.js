function sort_students(numbers) {
    
	 //var changed = false
	 for(var i=0; i<numbers.length; i++){
	 	for(var j=1; i<numbers.length-1; j++){
			//changed = false
            if(numbers[j-1] > numbers[j]){// && !changed){
                var temp = numbers[j]
                numbers[j] = numbers[j-1]
                numbers[j-1] = temp
					//changed = true
					break
            }
        }
    }
    console.log(numbers)
}

numbers = [5,3,5,2]
sort_students(numbers)
