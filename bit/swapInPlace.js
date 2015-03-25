//swap two numbers without any additional temporal space

function swap_in_place(v,p1,p2){
	
	console.log("before change: ", v[p1], v[p2])
	
	v[p1] = v[p1] - v[p2];
	v[p2] = v[p2] + v[p1];
	v[p1] = Math.abs(v[p1] - v[p2]);
	
	console.log("after change: ", v[p1], v[p2])
}

function swap_in_place_bit(v,p1,p2){
	
	console.log("before change: ", v[p1], v[p2])
	
	v[p1] = v[p1]^v[p2];
	v[p2] = v[p2]^v[p1];
	v[p1] = v[p1]^v[p2];
	
	console.log("after change: ", v[p1], v[p2])

}

v = [2,3,4,6,8,10,23]
//swap_in_place(v, 6, 5)
swap_in_place_bit(v, 2, 5)
