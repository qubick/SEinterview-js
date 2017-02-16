//introduce different function definition style

// TypeError: undefined is not a function
functionOne();

var functionOne = function() { //this is anonymous function
  console.log("This won't be scripted!");
};


// Outputs: "Hello!"
functionTwo();

function funcitonTwo(){
  console.log("This is fine")
}
