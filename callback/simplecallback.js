function mycallback(err, data){
  try{
    console.log("this comes first: ", data)
  }
  catch(err){
    console.log(err)
  }
}

var letscallCallback = function(data, callback, err){
  if(err)
    console.log(err)
  else
    callback(err, data)
}

var data = 'get it?'
letscallCallback(data, mycallback)
