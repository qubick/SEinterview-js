function Node(value){
	this.data = value
	this.left = null
	this.right = null
}

function Tree(node){

	this.head = node

	this.addChild = function(node){
		var temp = this.head

		while(1){
			if(node.data < temp.data){
				if(!temp.left){
					temp.left = node
					return
				} else {
					temp = temp.left
				}
			} else if(node.data > temp.data){
				if(!temp.right){
					temp.right = node
					return
				} else {
					temp = temp.right
				}
			}
		}
	}

	this.getChildren = function(){
		if(this.left)
			var left = this.left.data
		if(this.right)
			var right = this.right.data
		return [left,right]
	}
/*
	this.removeChildren = function(){
		this.left = null
		this.right = null
	}
*/

	this.preorder = function(node){
		var prent = node;
		console.log(prent.data) //print root first
	
	//	while(1){
			if(prent.left){
				this.preorder(prent.left)
			} if (prent.right){
				this.preorder(prent.right)
			} else { //no child exists
				return
			}
	//	}
	}

	this.postorder = function(node){
		var prent = node;

		if(prent.left){
			this.postorder(prent.left)
		} if(prent.right){
			this.postorder(prent.right)
		}	
		console.log(prent.data)
	}

	this.inorder = function(node){
		var prent = node;

		if(prent.left){
			this.inorder(prent.left)
		}
		console.log(prent.data)
		if(prent.right){
			this.inorder(prent.right)
		}
	}
}

function main(){
	var node1 = new Node(15)
		,node2 = new Node(5)
		,node3 = new Node(16)
		,node4 = new Node(12)
		,node5 = new Node(10)
		,node6 = new Node(13)
		,node7 = new Node(6)
		,node8 = new Node(7)
		,node9 = new Node(20)
		,node10 = new Node(18)
		,node11 = new Node(23)
		,node12 = new Node(3)
	
	var tree = new Tree(node1)

	tree.addChild(node2)
	tree.addChild(node3)
	tree.addChild(node4)
	tree.addChild(node5)
	tree.addChild(node6)
	tree.addChild(node7)
	tree.addChild(node8)
	tree.addChild(node9)
	tree.addChild(node10)
	tree.addChild(node11)
	tree.addChild(node12)

	//return console.log(tree.head.right.right.right.data)

	return tree.preorder(tree.head)
	//return tree.postorder(tree.head)
	//return tree.inorder(tree.head)
}

main()
