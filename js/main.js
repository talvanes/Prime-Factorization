$(document).ready(function(){
	/* All logic goes here */

	// #action-ok button OnClick action
	$('#action-ok').on("click", function(){
		// Grab a number
		var number = parseInt($('#number').val());

		// Create an array of prime numbers until that number
		var primes = primeNumbersUntil(number);

		$('#result').empty();

		// Check if number is prime
		if(primes.indexOf(number) != -1){
			// if number is not found in the array, it is prime
			$('#result').text(number + " is prime");
		} else {
			// otherwise, it is not prime so factorize it
			$('#result').append(' = ');
			for(var index = 0; number > 1; index += 1){
				var divisor = primes[index];
				var exponent = 0;
				if (number % divisor == 0){
					while(number % divisor == 0){
						number /= divisor;
						exponent += 1;
					}
					$('#result').append(divisor);
					if(exponent > 1) {
						// exponent = 1 can be omitted as in a^1 = a
						$('#result').append("<sup>" + exponent + "</sup>");
					}
					if(number > 1){
						$('#result').append(".");
					}
				}
			}
		}
	});
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
