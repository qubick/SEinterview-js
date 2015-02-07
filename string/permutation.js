
var str1 = "astring"
var str2 = "straing"

var bool = new Array(257)

function main(){

	if (str1.length != str2.length)
		return false
	
	else{
		for(var i=0; i<str1.length; i++)
			bool[str1.charCodeAt(i)]++

		for(var j=0; j<str2.length; j++){
			if(--bool[str2.charCodeAt(i)]< 0)
				return false
		}
		return true
	}	
}
