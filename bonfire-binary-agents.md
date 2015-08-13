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

This problem is very straight forward, you will get string that will represent a sentence in binary code, and you need to translate that into words. There is not direct way to do this so you will have to translate twice.

You should first convert from **binary** to **decimal** and from decimal to **ASCII**
soon

## Hint: 2
Things are easier when focusing on smaller parts, divide the input to focus on one letter at the time.

## Hint: 3
Make sure that each time you transcode a character from binary to decimal, that you reset whatever variable you used to keep track of the ones. Also do not forget to turn everything back into one string.

## My code:

```
function binaryAgent(str) {
    str = str.split(' ');
    var power;
    var decValue = 0;
    var sentence = '';
    for (var s in str) {
        for (var t in str[s]){
            if (str[s][t] == 1){
                power = Math.pow(2,+str[s].length - t - 1);
                decValue+= power;
            }
        }
        sentence+=(String.fromCharCode(decValue));
        decValue = 0;
    }
  return sentence;
}
```
## My Code Explanation:

* Separate the string into an array of strings separated by whitespace.
* Create some variables that will be needed along the way, the names are self explanatory for the most part.
* Iterate through each binary string in the new array.
* For each of these binary strings, check for the ones and ignore the zeroes.
* For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
* Store the power into the **power** variable by adding it to any previous ones on the variable **decValue**. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
* Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to **sentence** along with any other text string already converted and stored.
* Reset the variable **decValue** to avoid getting wrong decimals before continuing to the outer loop.
* At the end, we return out converted message.