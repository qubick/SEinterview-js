function balanced_bracket(s){
	var stackOpen = new Stack();

	for(var i=0; i<s.length; i++){
		if(s[i] == '(')
			stackOpen.push(s[i])
		else if(s[i] == ')'){
			var res = stackOpen.pop()
			if(!res)
				return console.log('Unbalanced')
		}
	}
	console.log('Balanced')
}

function balanced_short(s){
	var balance = 0
	Balnced = "Balanced"

	for(var i=0; i<s.length; i++){
		(s[i] == '(')?balance++:balance--
		if(balance <0)
			Balanced =  "Unbalanced"
			break;
	}
	if(balance) Balanced = "Unbalanced";

	console.log(Balanced)
}

function Stack(){
	this.top = 0;
	this.array = []

	this.push = function(obj){
		this.array[this.top++] = obj
	}

	this.pop = function(){
		this.top--
		if(this.top < 0)
			return false
		else{
			return true
		}
	}
}

s = '(()(()))'
//balanced_bracket(s)
balanced_short(s)
