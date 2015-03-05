//******************************
// compute the time needed to get to capacity
// given the capacity and the current volume of bottle 
// and inflow rate, outflow rate
// it never flow over, print 'LEVEL'
//******************************

function compute_time(cap, current_volume, in_flow, out_flow){

	if(in_flow === out_flow)
		return console.log('LEVEL')
	else
		return console.log(Math.abs((cap-current_volume)/(in_flow-out_flow)))
}

cap = 5
current_volume = 2.5
in_flow = 1
out_flow = 1.5

compute_time(cap, current_volume, in_flow, out_flow)
