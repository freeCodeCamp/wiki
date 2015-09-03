# Explanation:
This problem is very straight forward, you will get string that will represent a sentence in binary code, and you need to translate that into words. There is not direct way to do this so you will have to translate twice.

You should first convert from **binary** to **decimal** and from decimal to **ASCII** soon

## Hint: 2
Things are easier when focusing on smaller parts, divide the input to focus on one letter at the time.

## Hint: 3
Make sure that each time you transcode a character from binary to decimal, that you reset whatever variable you used to keep track of the ones. Also do not forget to turn everything back into one string.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

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

# Code Explanation:
- Separate the string into an array of strings separated by whitespace.
- Create some variables that will be needed along the way, the names are self explanatory for the most part.
- Iterate through each binary string in the new array.
- For each of these binary strings, check for the ones and ignore the zeroes.
- For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
- Store the power into the **power** variable by adding it to any previous ones on the variable **decValue**. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
- Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to **sentence** along with any other text string already converted and stored.
- Reset the variable **decValue** to avoid getting wrong decimals before continuing to the outer loop.
- At the end, we return out converted message.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282`
