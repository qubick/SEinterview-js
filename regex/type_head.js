function typeahead(usernames, queries) {
    // Write your code here
    // To print results to the standard output please use console.log()
    // Example: console.log("Hello world!");
    
    var found = false
    for(var i=0; i<queries.length; i++){
        var pattern = new RegExp(queries[j], 'i')
        
        for(var j=0; j<usernames.length; j++){    
            if(usernames[j].match(pattern))
                console.log(usernames[j])
            else
                console.log('-1')
        }
    }
}

var names = ['james', 'jBlank']
var queries = ['j', 'jm', 'jbl', 'JB']

type_head(names, queries)
