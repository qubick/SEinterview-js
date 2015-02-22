function Node(value) {
	this.data = value
	this.next = null
}

function LinkedList(node){
	if(node instanceof(Array)){
		
		this.head = node[0]
		var temp = this.head

		for(var i=1; i<node.length; i++){
			temp.next = node[i]
			temp = temp.next
		}
	} else {
		this.head = node
	}

	this.addNode = function(node){
		var temp = this.head
		while(temp.next)
			temp = temp.next
		temp.next = node
	}

	this.printAll = function(){
		var temp = this.head
		while(temp.next){
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

	node5.next = node4;

	var list = new LinkedList([node1, node2, node3, node4, node5])

	var fast = list.head
		,slow = list.head

	while(1){
		fast = fast.next.next
		slow = slow.next

		if(fast === slow) break
	}

	slow = list.head

	while(slow != fast){
		slow = slow.next
		fast = fast.next
	}
	
	return console.log(slow.data)
}

main()
