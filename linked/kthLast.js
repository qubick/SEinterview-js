function LinkedList(node){
	this.head = node;
	this.count = 1;

	this.add = function(from, to){
		from.next = to;
		this.count++
	}
	
	this.printAll = function(){
		var cur = this.head;

		while(cur){
			console.log(cur.data)
			cur = cur.next
		}
	}
}

function Node(value){
	this.data = value;
	this.next = null;
}

	var node1 = new Node(1),
		node2 = new Node(2),
		node3 = new Node(3),
		node4 = new Node(4),
		node5 = new Node(5),
		node6 = new Node(6),
		node7 = new Node(7),
		node8 = new Node(8),
		node9 = new Node(9)
		node10 = new Node(10);
	
	var list = new LinkedList(node1);
	list.add(node1, node2);
	list.add(node2, node3);
	list.add(node3, node4);
	list.add(node4, node5);
	list.add(node5, node6);
	list.add(node6, node7);
	list.add(node7, node8);
	list.add(node8, node9);
	list.add(node9, node10);
	//============= create linked list
function main(argc, argv){
	
	var cnt = 0
		,k	= 6

	var temp = list.head;
	while(temp){
		cnt++
		temp = temp.next;
	}
	
	temp = list.head;
	for(var i=0; i<cnt-k; i++)
		temp = temp.next
	
	return console.log(temp.data);

}

main(3)
