# Problem Explanation:
- You will create a program that converts an integer to a roman numeral.

## Hint: 1
- Creating an array with the Roman Numerals and one with the decimal equivalent for the new forms will be very helpful.

## Hint: 2
- If you add the numbers that go before the new letter is introduced, it will save you plenty of code, like values for 4, 9, and 40.

## Hint: 3
- You can't have more than three consecutive Roman numerals together.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

# Code Solution:

```js
var convert = function(num) {

  // Create arrays with default conversion with matching indices.
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  //empty string variable for the final roman number
  
  var romanized = '';

  // Loop through the indices of the decimalValue array.
  for (var index = 0; index < decimalValue.length; index++) {
    // Continue to loop while the value at the current index will fit into numCopy
    while (decimalValue[index] <= num) {
      // Add the Roman numeral & decrease numCopy by the decimal equivalent.
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};
```
#Second Solution:

```js
function convert(num) {
  //Array for storing the split values of given number(1984 = 1000+900+80+4)
  var numArr = [];
  //Finding the length of number
  len = num.toString().length;
  //Array for storing the roman numerals
  var romArr =[];
  //Store all the possible numerical values
  numValue = [1000000,500000,100000,50000,10000,5000,1000,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1];
  //Store the corresponding roman numerals
  romValue = ['M!','D!','C!','L!','X!','V!','M','CM','DCCC','DCC','DC','D','CD','CCC','CC','C','XC','LXXX','LXX','LX','L','XL','XXX','XX','X','IX','VIII','VII','VI','V','IV','III','II','I'];
//Loop through each value in numArr   
for(i=0;i<len;i++){
  
    r = num%10;
    num = Math.floor(num /10);
  //Obtain the split value and store in numArr,here get split values in decreasing order
    numArr.push(r*Math.pow(10,i));
  //Find the corresponding index in numValue and find its corresponding roman numeral in romValue
  romArr.push(romValue[numValue.indexOf(numArr[i])]);
}
 								
  //Reverse the array since we get the roman values in decreasing order
  return romArr.reverse().join("");
}
```
# Code Explanation:
- Read comments on code.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: 
`Thanks @Rafase282 @SaintPeter @benschac @coded9`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
