function Node(value){

	this.data = value
	this.left = null
	this.right = null
}

function Heap(node){
	this.root = node

	this.addNode = function(curr, newNode){
		var temp = curr
		
		if(newNode.data > temp.data){
	console.log("adding ", newNode.data)
			if(temp.right){
				var hold = curr
				curr = newNode
				newNode.right = hold.right
				this.addNode(hold.right, hold)
			}else{
				var hold = temp
				temp.right = temp
				hold = newNode
				return
			}
		}

		if(newNode.data < temp.data){
			if(temp.left)
				this.addNode(temp.left, newNode)
			else
				temp.left = newNode
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

	var heap = new Heap(node1)

	heap.addNode(heap.root, node2)
	heap.addNode(heap.root, node3)
	heap.addNode(heap.root, node4)
	heap.addNode(heap.root, node5)
	heap.addNode(heap.root, node6)
	heap.addNode(heap.root, node7)

	console.log(heap.root.right.right.right.data)
}

main()
