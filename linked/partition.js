function LinkedList(node){

	if(node instanceof(Array)){
		this.head = node[0]
		var runner = this.head

		for(var i=1; i<node.length; i++){
			runner.next = node[i]
			runner = runner.next
		}
	} else {
		this.head = node
	}

	this.printAll = function(){
		var temp = this.head
		while(temp){
			console.log(temp.data)
			temp = temp.next
		}
	}
}

function Node(value){
	this.data = value
	this.next = null
}

function main(){
	var node1 = new Node(1),
		 node2 = new Node(5),
		 node3 = new Node(2),
		 node4 = new Node(4),
		 node5 = new Node(3),
		 node6 = new Node(2),
		 node7 = new Node(10);
	var list = new LinkedList([node1, node2, node3, node4, node5, node6, node7]);
	//define list

	var x = 3,
		 prev = list.head,
		 curr = prev.next
	
	while (curr.next){
		if(curr.data >= x){
			var tail = curr
			while (tail.next)
				tail = tail.next
			
			prev.next = curr.next
			curr.next = null
			tail.next = curr

			prev = prev.next
			curr = prev.next
		} else {
			prev = prev.next
			curr = curr.next
		} 
	}
	return list.printAll();
}

main()
