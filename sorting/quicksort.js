function quicksort(v, left, right){
	var pivot = v[left]
	var i,j
	
	if(left<right){
		i = left
		j = right+1
		while(i<j){
			do{
				i++
			}while(v[i]>pivot) //pick one which is smaller than pivot to send back
			do{
				j--
			}while(v[j]<pivot) //pick one which is greater than pivot to send front

			if(i<j){
				var temp = v[i]
				v[i] = v[j]
				v[j] = temp
			} else {
				break //finish one cycle
			}
		}

		var temp = v[j]
		v[j] = v[left]
		v[left] = temp

		quicksort(v, left, j-1)
		quicksort(v, j+1, right)
	}
}

var v = [33, 12, 33, 14, 45, 6, 37, 68, 39, 1]
quicksort(v,0,9)

console.log(v)
