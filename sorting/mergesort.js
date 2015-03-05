function merge_arrays(a, b) {
    // Write your code here
    // To print results to the standard output please use console.log()
    // Example: console.log("Hello world!");
    var listA = new list(a)
        ,listB = new list(b)

    var runA = listA.head
        ,runB = listB.head

	var cnt =0

	//console.log(runA.data, runB.data)
    do{
        if(runA.data < runB.data && runA.next){
            runA = runA.next
		  }else{
				if(runA.next){
            	var temp = runA.next
            	runA.next = runB
            	runB = runB.next
            	runA = temp
				}else {
					runA.next = runB
					break
				}
        }
    }while(runB)
	
	listA.printAll()    
}

function list(node){
    if(node instanceof(Array)){
        this.head = new Node(node[0])
        var temp = this.head
        for(var i=1; i<node.length; i++){
            temp.next = new Node(node[i])
            temp = temp.next
        }
    }else{
        this.head = node
    }
    
    this.printAll = function(){
        var temp = this.head
        while(temp){
            console.log(temp.data)
            temp = temp.next
        }
    }
}

function Node(value){
    this.data = value
    this.next = null
}

a = [2,3,7,8,8]
b = [7,8,13]
merge_arrays(a,b)
