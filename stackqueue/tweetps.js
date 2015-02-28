function tweets_per_second(tps, k) {
    // Write your code here
    // To print results to the standard output please use console.log()
    // Example: console.log("Hello world!");
    
    var queue = new Queue()
    for(var i=0; i<tps.length; i++){
        queue.push(new Node(tps[i]))
    }
    
    for(var j=0; j<tps.length-k; j++){
        var arr = queue.pop(k)
        var max = 0
        for(var k=0; j<arr.length; j++){
            if(arr[k]>max)
                max = arr[k]
        }
        console.log(max)
    }
}

function Queue(){
    this.length = 0
    this.head = null
    this.tail = null

    this.push = function(node){
     
        if(!this.head){
            this.head = node
            this.tail = node
        } else if(this.head === this.tail){
            this.head.next = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }
    
    this.pop = function(num){
        var res = []
        var temp = this.head
        for(var i=0; i<num; i++){
            res[i] = temp.data
            if(temp.next)
                temp = temp.next
            else
                break
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
