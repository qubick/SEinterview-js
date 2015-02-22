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

function Stack(){

	this.topN = 0
	this.array = []

	this.push = function(element){
		this.array[this.topN] = element
		console.log(this.array[this.topN])
		this.topN = this.topN + 1
	}
	
	this.pop = function(){
		var res = this.array[this.topN]
		console.log(res, 'poped')
		this.topN = this.topN - 1
		return res
	}
}

function main(){
	var node1 = new Node(1)
		,node2 = new Node(2)
		,node3 = new Node(3)
		,node4 = new Node(4)
		,node5 = new Node(3)
		,node6 = new Node(2)
		,node7 = new Node(1)

	node5.next = node4;

	var list = new LinkedList([node1, node2, node3, node4, node5, node6, node7])
	var stack = new Stack()

	var temp = list.head

	var data

	while(temp){
		stack.push(temp.data)
		temp = temp.next
	}
	
	temp = list.head
data = stack.pop()
console.log("main: ",data)
	while(temp){
		if (data != temp.data)
			//return false
			return console.log("This is not a palindrome")
		else
			temp = temp.data
	}
	
	return console.log("This is palindrome")
}

main()
