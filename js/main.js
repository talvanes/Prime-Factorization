$(document).ready(function(){
	/* All logic goes here */

});

function primeNumbersUntil(num){
	/*

		This function uses the Sieve of Eratosthenes to find prime numbers
		until the number num given

		@param num Any number greater than or equal 2 given

		@returns An array containing such prime numbers

	*/
	var primes = [];

	/* Check if number is greater than or equal 2 */
	if (num >= 2){
		// 1) First, generate primes until the number given
		for (var index = 0; index <= num; index += 1){
			if(index < 2){
				// zero and one aren't prime numbers, so they are filled with 'false'
				primes.push(false);
			} else {
				// otherwise, fill with numbers
				primes.push(index);
			}
		}

		// 2) Next, pick up only prime numbers by using the Sieve of Erathostenes
		for(var test = 2; test <= Math.ceil(Math.sqrt(num)); test += 1){
				if(primes[test]){
					//
					for(var index = test + 1; index <= num; index += 1){
						// checking divisibility among numbers
						if(index % test == 0){
							// if index divides a test number, it's not prime
							primes[index] = false;
						}
					}
				}
			}

		// 3) Then, splice all 'places' containg 'false'
		for(var index = primes.length; index >= 0; index--){
			if(primes[index] === false){
				primes.splice(index, 1);
			}
		}
	}

	// Now return the array
	return primes;
}
