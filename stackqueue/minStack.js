// design a stack with the accessor of 'min'
// in addition to 'top' and 'bottom'
// that always return the minimum value at O(1) time


function Stack(){
  this.top = -1
  // this.min = 100000
  this.minIdx = -1
  this.data = []

  this.push = function(value){
    if(Array.isArray(value)){
      for(var i=0; i<value.length; i++){
        this.data[++this.top] = value[i]

        if(this.top == 0) //the first element in this stack
          this.minIdx = this.top
        else if(this.data[this.minIdx] >= this.data[this.top])
          this.minIdx = this.top
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

  this.min = function(){
      console.log("min data: ", this.data[this.minIdx])
  }

  this.printData = function(){
    for(var index=this.top; index>-1; index--)
      console.log(this.data[index])
  }
}

var stack = new Stack()

stack.push([2,3,4,5,2,4,10,8,4,1])
stack.printData()
stack.min()
