// given two percentages p1, p2, integer number v
// printout p1 percent from v
// printout p2 percent from v
// two percentage numbers will always add up to 1
// if roundgin is neccessday, round first number half up
// ensure total of calculated values is given value v originally

function precision(p1, p2, v){

	console.log(Math.round(p1*v), v - Math.round(p1*v))
}

p1 = 0.95
p2 = 0.05
v = 100
/*
p1 = 0.5
p2 = 0.5
v = 1
*/
precision(p1, p2, v)
