/******************************************
// question from talentbuddy.co
Book store
Data in MongoDB has a flexible schema. Decisions that affect how you model data can affect application performance and database capacity.

An e-commerce book store is storing for each book the title, authors and publisher (name, location)

Knowing that authors information will be frequently retrieved together with the book title and many books usually belong to the same publisher we are going to design a data model based on embedded documents and references.
The authors info will be embedded in the book document to speed up retrievals, while publisher info will just be referenced to save space.

// Book document
{
   _id: "9991f84c4b0a110af3830012",
   title: "MongoDB: The Definitive Guide",
   authors: [ "Kristina Chodorow", "Mike Dirolf" ],
   publisher_id: "5241f84c4af0110af3830bb0"
}
  
// Publisher document
{
   _id: "5241f84c4af0110af3830bb0",
   name: "O'Reilly Media",
   location: "CA"
}
  
database specifications that must be used for storing the data:
	host: "db.talentbuddy.co"
	port: 27017
	database name: "store"
	collection name for books: "books"
	collection name for publishers: "publishers"

function will receive the following arguments:

	title: which is a string representing the book title
	authors: which is an array strings representing the authors of the book
	pub_name: which is a string representing the publisher name
	pub_location: which is a string representing the publisher location
******************************************/

// https://github.com/mafintosh/mongojs
var mongojs = require('mongojs');

// https://github.com/caolan/async
var async = require('async');


function store_book(title, authors, pub_name, pub_location, next) {
    // Write your code here
    // You must call the callback "next" after the function has successfully completed its task   
    var dbBooks = mongojs("db.talentbuddy.co:27017/store",['books']);
    var dbPubs = mongojs("db.talentbuddy.co:27017/store",['publishers']);
    
    var publisher = {
        "name":pub_name,
        "location":pub_location
    }
    
    //book first? publisher first?
    dbPubs.publishers.insert(publisher, function(err, pubId, cb){
        if(!err){
            var book = {
                "title":title,
                "authors":authors,
                "publisher_id":pubId
                } //end of json doc
            
				dbPubs.publishers.insert(book, cb()){
                if(!err){
                	var pubId = dbPubs.publishers.findOne({
							"title":title
							}, function(err, doc){
								pubId = doc._id.toString()
							});
					 		
							return pubId

						}
            });
        } //end of if
    })
    
}
