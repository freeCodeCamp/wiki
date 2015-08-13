# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) submitted by Rafase282 | https://github.com/Rafase282

* FreeCodeCamp Profile: http://www.freecodecamp.com/rafase282
* CodePed Profile: http://codepen.io/Rafase282/
* LinkedIn: https://www.linkedin.com/in/rafase282

# [My Original Wiki](http://rafase282.github.io/My-FreeCodeCamp-Code/)

# Details

* Difficulty: 2/5

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-I-get-stuck) if you get stuck. Try to pair program. Write your own code.

# Useful Links

* [String.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

# Problem Script:

```
function binaryAgent(str) {
  return str;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
```

## Explanation:

to-do

## Hint: 1
soon

## Hint: 2
soon

## Hint: 3
soon

## My code:

```
function binaryAgent(str) {
	// Separate the binary code by space.
    str = str.split(' ');
    var power;
    var decValue = 0;
    var sentence = '';
    // Check each binary number from the array.
    for (var s in str) {
        // Check each bit from binary number
        for (var t in str[s]){
            // This only takes into consideration the active ones.
            if (str[s][t] == 1){
            	// This is quivalent to 2 ** position
                power = Math.pow(2,+str[s].length - t - 1);
                decValue+= power;
                // Record the decimal value by adding the number to the previous one.
            }
        }
        // After the binary number is converted to decimal, convert it to string and store
        sentence+=(String.fromCharCode(decValue));
        // Reset decimal value for next binary number.
        decValue = 0;
    }
  return sentence;
}
```
## My Code Explanation:

soon

## [Go Home](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)