# Instructions

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

Note that the three dots at the end add to the string length.

# Tests final code needs to pass

1. expect(truncate('A-tisket a-tasket A green and yellow basket', 11)).to.eqls('A-tisket...');
2. expect(truncate('Peter Piper picked a peck of pickled peppers', 14)).to.eqls('Peter Piper...');
3. assert(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length) === 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is = length');
4. assert.strictEqual(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2), 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is < length');

## Hint

Truncate the string to a length equal to the second parameter passed to the function. Remember the added ... is included in the final string length.

## My final code

    function truncate(str, num) {
      // Clear out that junk in your trunk
      if (str.length > num) {
        str = str.slice(0, num-3) + '...';
      }
      return str;
    }

    truncate('A-tisket a-tasket A green and yellow basket', 11);

## Explanation

First we need a conditional if statement to test if the length of the full string passed in as the first argument is greater than the maximum passed in as the second argument.

    if (str.length > num)

Then we need to slice the full string at the length required (second argument). The trick is to minus the length of the ... that needs to be added to get the final truncated string.

    str = str.slice(0, num-3)

Finally, just add the ... to the end of the sliced substring ready to be returned

    str = str.slice(0, num-3) + '...';