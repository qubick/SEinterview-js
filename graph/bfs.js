function Node(value){
	this.data = value
	this.nabors = []
	this.visited = false
}

function Graph(){
	var queue = new Queue()

	this.addNode = function(prev, next){
		next.forEach(function(n){
			prev.nabors.push(n)
		})
	}

	this.bfs = function(node){

		if(node.visited === false){
			console.log(node.data)
			node.visited = true
		
			for(var i=0; i<node.nabors.length; i++){
				if(node.nabors[i].visited === false)
					queue.inqueue(node.nabors[i])	
			}
		}

		while(!queue.empty){
			var trav = queue.dequeue()
			
			if(trav != false && trav != undefined){
				this.bfs(trav)
			}else{
				break
			}
		}
	}
}

function Queue(){
	
	this.data = []
	this.first = 0
	this.last = 0
	this.empty = false

	this.inqueue = function(node){
		this.data[this.last++] = node
		this.empty = false
	}

	this.dequeue = function(){
		if(!this.empty)
			return this.data[this.first++]
		else
			return false
	}

	this.empty = function(){
		if (this.first === this.last)
			return true
		else
			return false
	}
}

function main(){

	var node1 = new Node(1)
		,node2 = new Node(2)
		,node3 = new Node(3)
		,node4 = new Node(4)
		,node5 = new Node(5)
		,node6 = new Node(6)
		,node7 = new Node(7)
		,node8 = new Node(8)

	var graph = new Graph()

	graph.addNode(node1, [node2, node4])
	graph.addNode(node2, [node1, node3])
	graph.addNode(node3, [node2, node4, node5, node6, node7])
	graph.addNode(node4, [node1, node3])
	graph.addNode(node5, [node3, node7])
	graph.addNode(node6, [node3, node7])
	graph.addNode(node7, [node3, node5, node6, node8])
	graph.addNode(node8, [node7])
	
	//console.log(node3.nabors)
	graph.bfs(node5)
}

main()
