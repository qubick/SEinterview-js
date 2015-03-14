function Node(value){
	this.data = value
	this.neighbor = []
}

function Graph(node){
	this.head = node
}

function cost(x,y){ //only returns direct cost
	for(var i=0; i<x.neighbor.length; i++){
		if(x.neighbor[i] === y)
			return 1
	}
	return false
}

function main(){

	var head = new Node(10)
		,B = new Node(1)
		,C = new Node(2)
	
	var graph = new Graph(head);
	hade.next = B;
	B.next = C;
	//C.next = null

	
}

main()
