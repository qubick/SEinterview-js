function tweets_per_second(tps, k) {
    // Write your code here
    // To print results to the standard output please use console.log()
    // Example: console.log("Hello world!");
    if(tps.length == 1)
        console.log(tps[0])
    else if (tps.length ==2)
        console.log((tps[0]>tps[1])?tps[0]:tps[1])
    else{  
        var queue = new Queue()
        for(var i=0; i<tps.length; i++){
            queue.push(new Node(tps[i]))
        }
        
        for(var j=0; j<tps.length-3; i++){
            var arr = queue.pop();
            if(arr[0]>arr[1]?var max=arr[0]:var max=arr[1])
                if(max>arr[2]?console.log(max):console.log(arr[2])
        }
    }
}

function Queue(){
    this.length = 0
    this.head = null
    this.tail = null
    
    this.push = function(node){
        if(this.head === this.tail){
            this.head.next = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }
    
    this.pop = function(){
        var res = [this.head.data, this.head.next.data, this.head.next.data]
        this.head = this.head.next
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