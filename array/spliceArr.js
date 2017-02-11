//splice data into given array

function splice_ex(inputPos, numInput, origArray, data){


	origArray.splice(inputPos, numInput, data[0], data[1])
	console.log(origArray)
}

var input = ["Banana", "Orange", "Apple", "Mango", "Tomato"]
var insert = ["lemon", "kiwi"]
splice_ex(2,2,input, insert)
