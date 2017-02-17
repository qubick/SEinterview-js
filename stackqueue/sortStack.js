// sort a stack in ascending ordoer
// to place the biggest element on the top
// using only one more stack, not any other datat structure to copy them

// not solved... some recursive function should be here

function Stack(){
  this.top = -1
  this.data = []

  this.push = function(value){
    if(Array.isArray(value)){
      for(var i=0; i<value.length; i++){
        this.data[++this.top] = value[i]
      }
    }
    else {
      this.data[++this.top] = value
    }
  }

  this.pop = function(){
    if(this.top > -1)
      return this.data[this.top--]
    else
      console.log("stack is empty")
  }

  this.empty = function(){
    if (top == -1){
      return true
    }
    else {
      return false
    }
  }
  this.printData = function(){
    for(var index=this.top; index>-1; index--)
      console.log(this.data[index])
  }
}


function sortStack(origin){
  var newStack = new Stack()
      ,index = 0

  while(origin.empty == false){
    var item1 = origin.pop()
    var item2 = origin.pop()

    // before saving to the new Stack, sort values
    // use rest of origin stack as temp space
    var value = item1 > itme2 ? item1 : item2
    recurComp(origStack, vStack, value)
    origin.push(item1)
  }
}

function recurComp(origStack, vStack, value){
  var item1 = value
  var item2 = vStack.pop() //check exception; if vStack is empty

  if(item1 < item2)
    origStack.push(item2)
    vStack.push(item1)
  else {
    origStack.push(item1)
    vStack.push(item2)
  }
}

var stack = new Stack()

stack.push([2,3,14,1,5,2,4,10,8,9,10])
// stack.printData()
sortStack(stack)
stack.printData()
