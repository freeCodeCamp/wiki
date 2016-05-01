# Explanation:
The explanation for this problem is very simple. You will generate a list of prime numbers up to the number you are given as a parameter. Then you need to add them all up and return that value. The tricky part is on generating the list of prime numbers. I suggest you find a code or a good math algorithm that you can turn into code.

## Hint: 1
Generate a list of all the numbers up to and including the one you got as a parameter. This will be needed to determine which numbers are prime or not.

## Hint: 2
Check this [link](http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100) if you prefer to find a solution for finding primes, or try learning and implementing your own [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

## Hint: 3
This problem is hard if you have to create your own code to check for primes, so don't feel bad if you had to use someone's code for that bit. Either way, you are most likely using array, so once you generate an array of primes, then just add them all up and return the number you get.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function sumPrimes(num) {
  var res = 0;

  // FUnction to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes(10);
```
:rocket: [REPL It!](https://repl.it/CLnZ/0)

# Code Explanation:
- Create a function that generates the numbers from 1 to **num** and check if they are prime along the way.
- Declare the variables that will be needed.
- Start with 2, if it has not been marked and added to the sieve array then it is a prime and we add it to the prime array.
- Add the others to the sieve array.
- Return the primes
- Loop through the returned array and add all the elements to then return the final value.

## Recursive Solution:
```js
function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number){
      for (i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
          // return true if it is divisable by any number that is not itself. 
             return false;
          }
       }
       // if it passes the for loops conditions it is a prime
      return true;
  }
  // 1 is not a prime, so return nothing, also stops the recusrive calls.
  if (num === 1){
    return 0;
  }
  // Check if your number is not prime
  if(isPrime(num) === false){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }
  
  // Check if your number is prime
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}
// test here
sumPrimes(10);
```
:rocket: [REPL It!](https://repl.it/CLn0/0)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @shadowfool for your help with Algorithm: Sum All Primes`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
