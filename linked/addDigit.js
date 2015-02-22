// Question
// take 2 list containing one digit at a node
// i.e. 7 -> 1 -> 2 == 217
// add two numbers of list
// i.e. 7 -> 1 -> 6  +  5 -> 9 -> 2  == 617 + 295
// save output into new list as one digit at a node

// Tip
// Consider if both node are exist before add
// take parity to make sure if the result is one digit
// otherwise add 1 to upper digit and minus 10 at this digit


function Node(value){

	this.data = value;
	this.next = null;
}

function LinkedList(node){
	
	if(node instanceof(Array)){
		this.head = node[0];
		var tmp = this.head;
		
		for(var i=1; i<node.length; i++){
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

	list1.printAll()
	list2.printAll()

	var temp1 = list1.head
		,temp2 = list2.head
	var i = 1
		
	var newData = temp1.data + temp2.data
	if(newData < 10){
		var over = false
	} else {
		var over = true
		newData -= 10;
	}

	var newList = new LinkedList(new Node(newData))
	
	temp1 = temp1.next
	temp2 = temp2.next

	while(1){
		if(temp1 && temp2){
			newData = temp1.data + temp2.data
			temp1 = temp1.next
			temp2 = temp2.next
		} else if (temp1 && !temp2){
			newData = temp1.data
			temp1 = temp1.next
		} else if (!temp1 && temp2){
			newData = temp2.data
			temp2 = temp2.next
		} else {
			break
		}

		//create node
		if(over) {
			newData++
			over = false
		}

		if(newData < 10)
			newList.addNode(new Node(newData))
		else {
			over = true
			newList.addNode(new Node(newData-10))
		}
	}
	return newList.printAll()
}

main()
