//build adjacent style graph
//do depth first search

function graph(n){

	this.visit = new Array(n)
	this.map = new Array(n)
	for(var i=0; i<n; i++){
		//this.map[i] = new Array(n)
		this.map[i] = Array.apply(null, new Array(n)).map(Number.prototype.valueOf,0); //create zero filled arr
	}
	//console.log(this.map)
	//console.log(this.visit)

	this.addNode = function(v1, v2){
		this.map[v1-1][v2-1] = this.map[v2-1][v1-1] = 1
	}
	
	this.DFS = function(v){
		this.visit[v-1] = 1 //visit thatnode

		for(var i=0; i<this.visit.length; i++){
			
			if(this.map[v-1][i] === 1 && this.visit[i] === undefined){
				console.log("visit " + (i+1))
				this.DFS(i+1)
			}
		}
	}
	
	this.printMap = function(){
		console.log(this.map)
	}
}

function main(){
	n = 8
	var gr = new graph(n)

	gr.addNode(1,2)
	gr.addNode(1,3)
	gr.addNode(2,4)
	gr.addNode(2,5)
	gr.addNode(3,6)
	gr.addNode(3,7)

	gr.addNode(4,8)
	gr.addNode(5,8)
	gr.addNode(6,8)
	gr.addNode(7,8)

	gr.printMap()

	console.log("visit 1")
	gr.DFS(1)
}

main()
