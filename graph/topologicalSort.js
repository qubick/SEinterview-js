function topological_sort(dependencies){

	var graph = new Graph()
		,hash = []
	
	dependencies.forEach(function(d){
		var nodes = d.split(',')

		if(hash[nodes[0]] === undefined){
			var prev = new Node(nodes[0])
			hash[nodes[0]] = prev
		}else{
			var prev = hash[nodes[0]]
		}
		
		if(hash[nodes[1]] === undefined){
			var next = new Node(nodes[1])
			hash[nodes[1]] = next
		}else{
			var next = hash[nodes[1]]
		}
		graph.addNext(prev, next)
	})

	var a = dependencies[0].split(',')
	graph.dfs(hash[a[0]])
	//console.log(hash[a[0]].next)
}

function Stack(){
	this.data = []
	this.topP = 0
	this.empty = true

	this.push = function(node){
		this.data[this.topP++] = node
		this.empty = false
	}

	this.pop = function(){

		if(--this.topP != 0)
			return this.data[this.topP]
		else{
			this.empty = true
			return null
		}
	}
}

function Node(value){
	this.data = value
	this.next = []
	this.visited = false
}

function Graph(node){
	var stack = new Stack()
	
	this.addNext = function(node1, node2){
		node1.next.push(node2)
	}

	this.dfs = function(node){
		do{
			if(node.visited === false){
				console.log(node.data)
				node.visited = true
			
				var nabors = node.next
				nabors.forEach(function(n){
					stack.push(n)
				})

				var trav = stack.pop()

				if(trav != null)
					this.dfs(trav)
				else
					break
			}
		}while(!stack.empty)
	}
}

dependencies = ["keep,on", "keep,calm", "calm,and", "calm,carry", "carry,on"]

topological_sort(dependencies)
