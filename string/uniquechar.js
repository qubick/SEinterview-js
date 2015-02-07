var str = "sometring",
	bool = new Array(257);

function main(){

	//console.log(bool);
	for(var i=0; i<str.length; i++){
		aChar = str[i].charCodeAt(0);
		if(isFoundOnce(aChar) === false){
			console.log("not unique")
			return
		}
	}
	return console.log("unique string")
}

function isFoundOnce(aChar){
	if (bool[aChar] === undefined){
		bool[aChar] = true;
		return true;
	} else { //bool[aChar] is true, found once already
		return false;
	}
}

main()
