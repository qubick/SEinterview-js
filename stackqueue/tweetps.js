function tweets_per_second(tps, k) {
    
    var queue = new Queue()
    
    for(var i=0; i<=tps.length-k; i++){
        queue.push(new Node(tps[i]), k)
        
		  var res = queue.pop(i+1)
        var max = 0
        
        for(var j=0; j<res.length; j++){
            if(max < res[j])
                max = res[j]
        }
        console.log(max)
    }
    for(var i=tps.length-k+1; i<tps.length; i++){
        queue.push(new Node(tps[i]),k)
        var res = queue.pop(i+1)
        var max = 0
        
        for(var j=0; j<res.length; j++){
            if(max < res[j])
                max = res[j]
        }
        console.log(max)
    }
}

function Queue(){
    this.length = 0
    this.head = null
    this.tail = null

    this.push = function(node,k){
     
        if(!this.head){
            this.head = node
            this.tail = node
        this.length++
        } else if(this.head === this.tail){
            this.head.next = node
            this.tail = node
        this.length++
        } else if(this.length < k){
            this.tail.next = node
            this.tail = node
        this.length++
        } else {
		 		this.tail.next = node
				this.tail = node
				this.head = this.head.next
		  }
    }
    
    this.pop = function(num){
        var res = []
        var temp = this.head
        
        for(var i=0; i<num; i++){
            res[i] = temp.data
            if(temp.next){
                temp = temp.next
            }else{
                break
            }
        } 
        return res
    }
    
    this.empty = function(){
        if(this.head === this.tail && this.head === null)
            return true
        else
            return false
    }
    
    this.full = function(){
        if(this.head.next.next === this.tail)
            return true
        else
            return false
    }
}

function Node(value){
    this.data = value
    this.next = null
}

var tps = [6, 9, 4, 7, 4, 1]
k = 3
tweets_per_second(tps, k)
