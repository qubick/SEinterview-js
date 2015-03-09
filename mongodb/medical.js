/*********************************
The address document will be embedded in the patient document as follows:
    {
     _id: "5241f84c4af0110af3830bb0",
     name: "John Smith",
     address: {
        street: "109 Nelson Street",
        city: "Vancouver",
        zip: 12345
      }
    }
  
Given the patient's information
Your task is to
- write a function that connects to mongoDB and stores the data using the data model above
please note the following database specifications that must be used for storing the data:
	host: "db.talentbuddy.co"
	port: 27017
	database name: "app"
	collection name: "patients"

Note that your function will receive the following arguments:
	name : which is a string representing the patient name
	street : which is a string representing the street address
	city : which is a string representing the city
	zip	: which is a string representing the zip code
*********************************/

// JavaScript module containing tools for working with MongoDB
// https://github.com/mafintosh/mongojs
var mongojs = require('mongojs');

// https://github.com/caolan/async
var async = require('async');


function store_patient(name, street, city, zip, next) {
    // You must call the callback "next" after the function has successfully completed its task
    
    var db = mongojs("db.talentbuddy.co:27017/app",['patients']);
                             

    var data = { "name": name,
                 "address":{
                    "street":street,
                    "city":city,
                    "zip":zip
                    }
                };
    db.patients.insert(data, function(err,res){
        if(!err)
            next()
        else
            console.log("error")
    });
}


