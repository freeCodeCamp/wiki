# Instructions

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

Note that the three dots at the end add to the string length.

# Tests final code needs to pass

1. expect(truncate('A-tisket a-tasket A green and yellow basket', 11)).to.eqls('A-tisket...');
2. expect(truncate('Peter Piper picked a peck of pickled peppers', 14)).to.eqls('Peter Piper...');
3. assert(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length) === 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is = length');
4. assert.strictEqual(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2), 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is < length');

# Hint

Truncate the string to a length equal to the second parameter passed to the function. Remember the added ... is included in the final string length.

# My final code

    function truncate(str, num) {
      // Clear out that junk in your trunk
      if (str.length > num) {
        str = str.slice(0, num-3) + '...';
      }
      return str;
    }

    truncate('A-tisket a-tasket A green and yellow basket', 11);
