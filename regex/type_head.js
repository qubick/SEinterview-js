function typeahead(usernames, queries) {
    
    var found = false
    var temp = ''
    
    for(var i=0; i<queries.length; i++){
        var pattern = new RegExp("^" + queries[i], 'i')
        
        for(var j=0; j<usernames.length; j++){    
            if(usernames[j].match(pattern)){
                if(!found){
                    temp = usernames[j]
                    found = true
                } else { //found multiple usernames
                    if(temp.toLowerCase() > usernames[j].toLowerCase())
                        temp = usernames[j]
                }
            }
        }
        if(!found){
            console.log('-1') 
        } else {
            console.log(temp)
            found = false
            temp = ''
        }
    }
}


var names = ['james', 'jBlank']
var queries = ['j', 'jm', 'jbl', 'JB']

typeahead(names, queries)
