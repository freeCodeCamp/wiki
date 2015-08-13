# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) submitted by Rafase282 | https://github.com/Rafase282

* FreeCodeCamp Profile: http://www.freecodecamp.com/rafase282
* CodePed Profile: http://codepen.io/Rafase282/
* LinkedIn: https://www.linkedin.com/in/rafase282

# [My Original Wiki](http://rafase282.github.io/My-FreeCodeCamp-Code/)

# Details

* Difficulty: 2/5

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

Remember to use [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-I-get-stuck) if you get stuck. Try to pair program. Write your own code.

# Useful Links

* [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
* [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

# Problem Script:
```
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```

## Explanation:

The explanation for this problem is very simple. You will generate a list of prime numbers up to the number you are given as a parameter. Then you need to add them all up and return that value. The tricky part is on generating the list of prime numbers. I suggest you find a code or a good math algorithm that you can turn into code.

## Hint: 1
Generate a list of all the numbers up to and including the one you got as a parameter. This will be needed to determine which numbers are prime or not.

## Hint: 2
Check this [link](http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100) if you prefer to find a solution for finding primes, or try learning and implementing your own [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

## Hint: 3
This problem is hard if you have to create your own code to check for primes, so don't feel bad if you had to use someone's code for that bit. Either way, you are most likely using array, so once you generate an array of primes, then just add them all up and return the number you get.

## My code:

```
function sumPrimes(num) {
    var res = 0;
    function getPrimes(max) {
        var sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
    return primes;
    }
    var primes = getPrimes(num);
    for (var p in primes) {
        res+= primes[p];
    }
return res;
}
```

## My Code Explanation:

* Create a function that generates the numbers from 1 to **num** and check if they are prime along the way.
* Declare the variables that will be needed.
* Start with 2, if it has not been marked and added to the sieve array then it is a prime and we add it to the prime array.
* Add the others to the sieve array.
* Return the primes
* Loop through the returned array and add all the elements to then return the final value.