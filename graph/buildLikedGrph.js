function Node(value){
	this.data = value
	this.neighbor = []
}

function Graph(){
	this.addNabor = function(node, nabor){
		if(nabor instanceof(Array)){
			nabor.forEach(function(n){
				node.neighbor.push(n)
			});
		} else {
			node.neighbor.push(nabor)
		}
	}
}

function cost(x,y){ //only returns direct cost
	for(var i=0; i<x.neighbor.length; i++){
		if(x.neighbor[i] === y)
			return 1
	}
	return false
}

function main(){

	var node1 = new Node(1)
		,node2 = new Node(2)
		,node3 = new Node(3)
		,node4 = new Node(4)
		,node5 = new Node(5)
		,node6 = new Node(6)

	var graph = new Graph();

	graph.addNabor(node1, [node2, node3])
	graph.addNabor(node2, [node1, node4])
	graph.addNabor(node3, [node1, node4, node5, node6])
	graph.addNabor(node4, [node2, node3, node5])
	graph.addNabor(node5, [node3, node4, node6])
	graph.addNabor(node6, [node3, node5])

	//console.log(node3.neighbor.data)
}

main()
