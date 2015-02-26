function longest_improvements(grade){

	var max = 0
	var cnt = 1

	for(var i=0; i<grade.length; i++){
	
		if(grade[i] <= grade[i+1]){
			cnt++
			if(cnt > max)
				max = cnt
		} else {
			cnt = 1
		}
	}

	console.log(max)
}

grades = [9, 7, 8, 2, 5, 5, 8, 7]

longest_improvements(grades)
