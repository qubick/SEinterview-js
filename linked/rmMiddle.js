//**************************************
// delete the node in the middle of list
// when givne the access to only to that node
// the head is not given
//**************************************

function LinkedList(node){
	//this.head = node;
	
	if (node instanceof(Array)){
		this.head = node[0]
		var tail = this.head
		for(var i=1; i<node.length; i++){
				tail.next = node[i]
				tail = tail.next
			}
	} else {
		this.head = node
	}
	
	this.printAll = function(){
		var temp = this.head;
		while(temp){
			console.log(temp.data)
			temp = temp.next
		}
	}
	
	this.add = function(node){
		var tail = this.head
		while(tail.next)
			tail = tail.next

		if (node.constructor === Array){
			for(var i=0; i<node.length; i++){
				tail.next = node[i]
				tail = tail.next
			}
		} else {
			tail.next = node
		}
	}
}

function Node(value){
	this.data = value
	this.next = null
}

function main(){
	var node1 = new Node(1),
		node2 = new Node(2),
		node3 = new Node(3),
		node4 = new Node(4),
		node5 = new Node(5),
		node6 = new Node(6),
		node7 = new Node(7);


	var list = new LinkedList([node1, node2, node3, node4, node5, node6, node7]);
	var mid = node6;
	//creation of list

	var runner = mid;
		runner.data = runner.next.data
		runner.next = runner.next.next
	return list.printAll();
}

main()
