function get_prime_numbers(n) {
    
    var sieve = [], i, j, primes = [];
    for (i = 2; i < n; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j < n; j += i) {
                sieve[j] = true;
            }
        }
    }
    console.log(primes.join(" "))
}

function get_prime_numbers_other(n) {
    
	 var isPrime = 1;
    var myPrimes = [];
    for (i = 2; i < n; i++){
        isPrime = 1;
        for (j = 2; j < i; j++){
             if (i % j === 0) isPrime=0;  
        }
        if (isPrime === 1) myPrimes.push(i);
    }
  
    console.log(myPrimes.join(" "));
}
