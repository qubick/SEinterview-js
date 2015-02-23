function Node(value){
	this.data = value
	this.next = null
}

function Queue(node){

	if(node instanceof(Array)){
		this.first = node[0]

		var temp = this.first

		for(var i=1; i<node.length; i++){
			temp.next = node[i]
			temp = temp.next
		}
		this.last = temp
	} else {
		this.first = node
		this.last = node
	}

	this.push = function(node){
		this.last.next = node
		this.last = this.last.next
	}

	this.pop = function(){
		var res = this.first.data
		this.first = this.first.next
		return res
	}

	this.printAll = function(){
		var temp = this.first
		while(temp){
			console.log(temp.data)
			temp = temp.next
		}
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

	var queue = new Queue([node1, node2, node3, node4, node5, node6, node7])

	queue.pop();
	queue.pop();

	var newNode = new Node(10)
	queue.push(newNode);

	return queue.printAll()
}

main()
