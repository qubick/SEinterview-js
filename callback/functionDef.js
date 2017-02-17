//introduce different function definition style

// TypeError: undefined is not a function
functionOne();

var functionOne = function() { //this is anonymous function
  console.log("This won't be scripted!");
};

// An anonymous function is a function that is not stored in a
// program file, but is associated with a variable whose data type
// is function_handle . Anonymous functions can accept inputs and
// return outputs, just as standard functions do. However, they
// can contain only a single executable statement.


// Outputs: "Hello!"
functionTwo();

function funcitonTwo(){
  console.log("This is fine")
}
