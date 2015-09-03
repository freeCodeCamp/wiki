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

# Code Explanation:
- Create a function that generates the numbers from 1 to **num** and check if they are prime along the way.
- Declare the variables that will be needed.
- Start with 2, if it has not been marked and added to the sieve array then it is a prime and we add it to the prime array.
- Add the others to the sieve array.
- Return the primes
- Loop through the returned array and add all the elements to then return the final value.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282`
