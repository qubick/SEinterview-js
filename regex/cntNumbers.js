function count_numbers(s){
	console.log(s.match(/[^0-9]/g).length)
	//console.log(s.match(/[0-9]/g).length)
}

s = "123akdj67i8"
count_numbers(s)
