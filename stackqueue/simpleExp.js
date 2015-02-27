function simpleExp(){
    var stack = new Stack();
    var res = 0 
       
    for(var i=0; i<expr.length; i++){
        if(expr[i] != ')'){
            stack.push(expr[i])
            console.log(expre[i], 'pushed')
        } else {
            var a = stack.pop();
            var oper = stack.pop();
            var b = stack.pop();
            
            if(oper === '+'){
                res = a+b
            } else if (oper === '-'){
                res = a-b
            } else if (oper === '*'){
                res = a*b
            } else if (oper === '/'){
                res = a/b
            }
            var flag = stack.pop() //pop open bracket
            if(!flag){
                console.log(res);
                return
            } else {
                stack.push(res);
            }
        }
    }
}

function Stack(){
    this.top = 0
    this.value = []
    
    this.push = function(obj){
        this.value[this.top++] = obj
    }
    
    this.pop = function(){
        if(this.top === 0)
            return false
        return this.value[this.top--]
    }
}Copy-paste code here to remove the line numbers.