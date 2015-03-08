function quicksort(v,left, right){
	var i, j
	var pivot = v[left]

	if(left<right){
		i=left
		j=right+1
		while(i<j){
			do{
				i++
			}while(v[i]<pivot)
			do{
				j--
			}while(v[j]>pivot)

			if(i<j)
			{
				var temp = v[i]
				v[i] = v[j]
				v[j] = temp
			}
			else
				break
		}

		//swap with pivot
		var temp = v[j]
		v[j] = v[left]
		v[left] = temp

		//recursion left and right except pivot
		quicksort(v, left, j-1)
		quicksort(v, j+1, right)
	}
	//console.log(v)
}
var v = [33, 12, 33, 14, 45, 6, 27, 8, 49, 1 ]
quicksort(v, 0, 9)

console.log(v)
