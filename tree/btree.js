function Node(value){
	this.data = value
	this.parent = null
	this.left = null
	this.right = null
}

function Tree(node){

	this.head = node

	this.setParent = function(node){
		this.parent = node
	}

	this.addChild = function(node){
		node.setParent(this)
		
		if(!this.left)
			this.left = node
		else if(!this.right)
			this.right = node
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

	node.addChild(node2)
	return console.log(tree.head.left.data)

}

main()
