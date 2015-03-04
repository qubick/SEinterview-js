function typeahead(usernames, queries) {
    
    var found = 0
    var hash = []
    
    for(var i=0; i<queries.length; i++){
        var pattern = new RegExp("^" + queries[i], 'i')
        
        for(var j=0; j<usernames.length; j++){    
            if(usernames[j].match(pattern)){
                if(hash[pattern] === undefined){
                    hash[pattern] = usernames[j]
                } else {
                    if(hash[pattern].toLowerCase() > usernames[j].toLowerCase())
                        hash[pattern] = usernames[j]
                }
            }
        }
        if(hash[pattern] === undefined){
            console.log('-1') 
        } else {
            console.log(temp)
            hash[pattern] = undefined
            temp = ''
        }
    }
}




var names = ['james', 'jBlank']
var queries = ['j', 'jm', 'jbl', 'JB']

typeahead(names, queries)
