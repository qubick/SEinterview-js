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
		//what if node is instanceof(Array)?
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

	this.search = function(node,value){
		var temp = node
	
			if(value === temp.data){
				//console.log(value, temp.data)
				return console.log("found")
			} 
			
			else if(value < temp.data){
				if(temp.left){
					this.search(temp.left, value)
				} else {
					return false
				}
			}

			else if(value > temp.data){
				if(temp.right){
					this.search(temp.right, value)
				} else {
					return false//not found, go upper stack 
				}
			}

			else
				return console.log("not found")
				//console.log(value, "not found")
	}

	this.maxHeight = function(node){
	
		if(node.left)
			var leftH = this.maxHeight(node.left)
		else
			var leftH = 0

		if(node.right)
			var righH = this.maxHeight(node.right)
		else
			var righH = 0

		return (leftH > righH)? leftH +1 : righH +1
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
		,node13 = new Node(9)
	
	var tree = new Tree(node1)

	/*
	               15
						/\
					  5  16
					 /\  /\
					3 12   20
					  /\   /\
					10 13 18 23
					/
				  6
				   \
				    7
	*/
	
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
	tree.addChild(node13)
	

	//check if the data inserted correctly
	//return console.log(tree.head.right.right.right.data)

	console.log(tree.maxHeight(tree.head))

	var res = tree.search(tree.head, 33)
	if(res === false) 
		return console.log("not found")
	//return tree.preorder(tree.head)
	//return tree.postorder(tree.head)
	//return tree.inorder(tree.head)
}

main()
