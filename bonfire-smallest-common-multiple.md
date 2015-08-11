placeholder intro to the bonfire

## hint
Here freeze a multiple candidate starting from the biggest array value - call it J 
`for (var j = max; j <= 1000000; j++){...}`

## hint
Now you have to test your candidate
`//I increase the denominator from min to max
    for (var k = arr[0]; k <= arr[1]; k++) {

      if (j % k === 0) { // every time the modulus is 0 increase a counting 
        count++; // variable
      }`

## final hint
When your candidate is a multiple???
`if (count === numbers.length) { 
      multiple.push(j); 
    }
`