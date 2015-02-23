function Node(value){
	this.data = value
	this.left = null
	this.right = null
}

function Tree(node){

	this.head = node

	this.addChild = function(node){
		var temp = this.head

		if(!temp.left){
			console.log('moved to left child')
			temp.left = node
		} else if(!temp.right) {
			console.log('moved to right child')
			temp.right = node
		}
	}

	this.getChildren = function(){
		if(this.left)
			var left = this.left.data
		if(this.right)
			var right = this.right.data
		return [left,right]
	}

	this.removeChildren = function(){
		this.left = null
		this.right = null
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
	
	var tree = new Tree(node1)

	tree.addChild(node2)
	tree.addChild(node3)
	return console.log(tree.head.right.data)

}

main()
