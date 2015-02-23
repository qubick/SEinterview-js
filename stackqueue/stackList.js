///////////////////////////////////////////
// Stack implemented by Linked List & node
///////////////////////////////////////////

function Stack(node){
	this.cnt = 0;

	if(node instanceof(Array)){
		this.topP = node[0]
		this.head = this.topP

		this.temp = this.topP
		for(var i=0; i<node.length; i++){
			temp.next = node[i]
			temp = temp.next
		}
	} else {
		this.topP = node
		this.head = node
	}

	this.push = function (newNode){
		this.topP.next = newNode
		topP = topP.next
	}
	this.pop = function (){
		if(!this.topP)
			console.log('the stack is empty!')
		else { 
			var res = this.topP.data
			var temp = this.head
			do{
				temp = temp.next
			}while(temp.next = this.topP)

			this.topP = temp
			return res
		}
	}
}

function main(){
	var stack = new Stack();

	stack.push(1)
	stack.push(2)
	stack.push(3)

	console.log(stack.pop())
	console.log(stack.pop())

	return
}

main()
