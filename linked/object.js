function Stack(){
	this.array = []
	this.cnt = 0;

	this.push = function (element){
		this.array[this.cnt] = element
		this.cnt = this.cnt + 1
	}
	this.pop = function (){
		if(this.cnt == 0)
			console.log('the stack is empty!')
		else { 
			this.cnt = this.cnt - 1
			var res = this.array[this.cnt]
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
