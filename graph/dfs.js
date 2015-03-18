function Node(value){
	this.data = value
	this.neighbor = []
	this.visited = false
}

function Graph(){
	var stack = new Stack()
	
	this.addNabor = function(node, nabor){
		if(nabor instanceof(Array)){
			nabor.forEach(function(n){
				node.neighbor.push(n)
			});
		} else {
			node.neighbor.push(nabor)
		}
	}

	this.dfs = function(node){

		for(var i=0; i<node.neighbor.length; i++){
			if(node.neighbor[i].visited === false)
				stack.push(node.neighbor[i])
		}

		if(node.visited === false){
			node.visited = true
			console.log(node.data)
		}

		while(!stack.empty){
			var next = stack.pop()
			if(next)
				this.dfs(next)
			else
				break
		}
	}
}

function Stack(){
	this.data = []
	this.empty = true
	this.full = false
	this.topP = 0

	this.push = function(node){
		if(!this.full){
			this.data[this.topP++] = node
			this.empty = false
		}else{
			console.log("stack is full")
			this.full = true
		}
	}

	this.pop = function(){
		if(!this.empty){
			return this.data[--this.topP]
		} else {
			console.log("stack is empty")
			this.empty = true
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

	//console.log(cost(node1,node5))
	graph.dfs(node2)
}

main()
