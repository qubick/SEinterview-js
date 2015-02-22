function Node(value){

	this.data = value;
	this.next = null;
}

function LinkedList(node){
	
	if(node instanceof(Array)){
		this.head = node[0];
		var tmp = this.head;
		
		for(var i=0; i<node.length; i++){
			tmp.next = node[i]
			tmp = tmp.next
		}
	} else {
		this.head = node
	}

	this.addNode = function(node){
		var tail = this.head
		while(tail.next)
			tail = tail.next
		tail.next = node
	}

	this.printAll = function(){
		var ptr = this.head;
		
		while(ptr){
			console.log(ptr.data)
			ptr = ptr.next
		}
	}
}


function main(){

	var node1 = new Node(7)
		,node2 = new Node(1)
		,node3 = new Node(6);

	var node4 = new Node(5)
		,node5 = new Node(9)
		,node6 = new Node(2)
		,node7 = new Node(1);

	var list1 = new LinkedList([node1, node2, node3])
		,list2 = new LinkedList([node4, node5, node6, node7])

//	list1.printAll()
//	list2.printAll()

	var temp1 = list1.head
		,temp2 = list2.head
		
	var newData = new Node(temp1.data + temp2.data)
		,over = false
	var newList = new LinkedList(newData)

	var i = 1
	while(1){
		if(temp1 && temp2){
			data = temp1.data + temp2.data
			if(over) {
				data++
				over = false
			}

			if(data < 9)
				newList.addNode(new Node(data))
			else {
				over = true
			}
			temp1 = temp1.next
			temp2 = temp2.next
		} else if (temp1 && !temp2){
			newData = temp1.data
			if(over) {
				data++
				over = false
			}
			newList.addNode(new Node(data))
			temp1 = temp1.next
		} else if (!temp1 && temp2){
			newData = temp2.data
			if(over) {
				data++
				over = false
			}
			newList.addNode(new Node(newData))
			temp2 = temp2.next
		} else
			break
		console.log(i++, 'th : ')
		newList.printAll()
	}
	return
}

main()
