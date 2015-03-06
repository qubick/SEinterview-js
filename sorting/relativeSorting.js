function relative_sorting(v){
	var pList = new list()
		,nList = new list()
	var arr = []
		,cnt = 0

	for(var i=0; i<v.length; i++){
		if(v[i]>0)
			pList.add(new node(v[i]))
		else
			nList.add(new node(v[i]))
	}
//	pList.printAll()
//	nList.printAll()

	var temp = nList.head
	while(temp){
		arr[cnt++] = temp.data
		temp = temp.next
	}
	temp = pList.head
	while(temp){
		arr[cnt++] = temp.data
		temp = temp.next
	}
	console.log(arr.join(" "))
}

function list(){
	this.head = null

	this.add = function(node){
		if(this.head === null){
			this.head = node
		} else {
			var temp = this.head
			while(temp.next)
				temp = temp.next

			temp.next = node
		}
	}
	this.printAll = function(){
		var temp = this.head
		while(temp){
			console.log(temp.data)
			temp = temp.next
		}
	}
}

function node(value){
	this.data = value
	this.next = null
}

input = [-5, 2, 1, -2, 3]
input2 =  [10, -3, 4, -2, 16]
relative_sorting(input2)

