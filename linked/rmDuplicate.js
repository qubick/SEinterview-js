function LinkedList(node){
	//this.Node = null;
	this.count = 1;
	this.head = node;

	this.add = function (from, to){
		from.next = to
		this.count++
	}

	this.printAll = function (){
		var cur = this.head;
		while(cur){
			console.log(cur.data);
			cur = cur.next;
		}
	}
}

function Node(value) {
	this.data = value;
	this.next = null;
}

function main(){
	var node1 = new Node(1),
		node2 = new Node(2),
		node3 = new Node(3),
		node4 = new Node(3),
		node5 = new Node(5);

	var list = new LinkedList(node1)
	
	list.add(node1, node2);
	list.add(node2, node3);
	list.add(node3, node4);
	list.add(node4, node5);
	//=================== create list

	var hash = Array(1000) //enough big

	var prev = list.head;
	var temp = list.head.next;

	hash[prev.data] = true;
	
	while(temp){

		if(hash[temp.data] === undefined){
			hash[temp.data] = true;
		}else{ //hash[temp.data] is true, shown once
			prev.next = temp.next;
		}
		prev = temp;
		temp = temp.next;
	}

	return list.printAll();
}

main()
