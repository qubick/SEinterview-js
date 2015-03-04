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


function kth_last_element(n){
	
	var cnt = 0
		,k	= n
	
	var node1 = new Node(1)
	var list = new LinkedList(node1)
	var prevNode = node1
	
	for(var i=2; i<=10; i++){
		var curNode = new Node(i)
		list.add(prevNode, curNode)
		prevNode = curNode
	}

	//list.printAll()
	//============= create linked list

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

kth_last_element(7)
