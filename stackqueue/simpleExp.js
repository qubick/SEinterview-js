function simpleExp(){
   var stack = new Stack();	
	var res = 0 

	var a = 0
		,b = 0
		,oper = ''
    
	 for(var i=0; i<expr.length; i++){
        if(expr[i] != ')'){
            stack.push(expr[i])
        } else {
            console.log('start pop')
            a = parseInt(stack.pop());
            oper = stack.pop();
				if(oper != '('){
	            b = parseInt(stack.pop());
   	         if(oper === '+'){
						res = b+a
         	   } else if (oper === '-'){
            	    res = b-a
	            } else if (oper === '*'){
   	             res = b*a
      	      } else if (oper === '/'){
         	       res = b/a
            	}

					if(stack.pop() ==='(')
						stack.push(res);
				}else{
					res = a
					stack.push(res)
				}
        }
    }
	console.log("read all expr")
	 
	 var num = []
	 	,oper = []
	 	,i = 0
		,j = 0

		do{
		a = stack.pop()
		if(parseInt(a) <= 9 && parseInt(a)>=0)
			num[i++] = parseInt(a)
		else
			oper[j++] = a
	} while(!stack.empty())

	console.log("read numeric expr without brackets")
	res = num[num.length-1]
	 for(var i=num.length-2; i>-1; i--){
	 	console.log(res, oper[i], num[i])
		if(oper[i] === '+'){
			res = res + num[i] 
		} else if (oper[i] === '-'){
			res = res - num[i]
		} else if (oper[i] === '*'){
			res = res * num[i]
		} else if (oper[i] === '/'){
			res = res / num[i]
      }
	 	console.log(res)	
	 }
	 console.log(res)
}

function Stack(){
    this.top = 0
    this.value = []
    
    this.push = function(obj){
        this.value[this.top++] = obj
        console.log(obj, 'pushed')
    }
    
    this.pop = function(){
        if(this.top === 0)
            return false
        return this.value[--this.top]
    }
	 
	 this.empty = function(){
	 	if(this.top === 0)
			return true
		else
			return false
	 }
}


expr = '(2+2)-(3-(6-5))-4'
//expr = '(2-2)-0+7+2-(3)-(3-(6-5))-4'
simpleExp(expr);

