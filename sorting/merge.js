//the last element of A is not yet concatenated

function mergeSort(a,b){

  a.sort(function(x,y){return x>y})
  b.sort(function(x,y){return x>y})
  var listA = new List(a)
  var listB = new List(b)

  var runA = listA.head
      ,runB = listB.head
      ,temp = null

  do{
    if(runA.next.data < runB.data && runA.next.next){
      runA = runA.next //simply move
    }
    else{
      if(runA.next.next){ //(attention!) runA should be one step ahead the data to compare
        temp = runA.next
        runA.next = runB
        runB = runB.next
        runA.next.next = temp
        runA = runA.next
      }
      else{
        temp = runA.next
        runA.next = runB
        break
      }
    }
  } while(runB)

  listA.printAll()
}

function List(value){
  this.head = null
  this.next = null

  if(value instanceof Array){
    this.head = new Node(value[0])
    var temp = this.head
    for(var i=1; i<value.length; i++){
      var node = new Node(value[i])
      temp.next = node
      temp = temp.next
      // console.log("creating list: ", node.data)
    }
  }
  else{
    this.head = new Node(value)
  }

  this.printAll = function(){
    var runner = this.head
    do{
      console.log(runner.data)
      runner = runner.next
    } while(runner)
  }
}

function Node(value){
  this.data = value
  this.next = null
}
var a = [1,3,2,9,8,11]
var b = [4,10,7,13]

mergeSort(a,b)
