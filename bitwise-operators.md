##Bitwise Operators

<< , >> , & , | , ~, and ^ are the bitwise operators which operates on one or more bit patterns or binary numerals at the level of their individual bits.

x << y  -> Left shift operator

Returns x with the bits shifted to the left by y places (and new bits on the right-hand-side are zeros). This is the same as multiplying x by 2**y.

x >> y  -> Right shift operator

Returns x with the bits shifted to the right by y places. This is the same as divding x by 2**y.

x & y  -> and operator

Does a "bitwise and". Each bit of the output is 1 if the corresponding bit of x AND of y is 1, otherwise it's 0.

x | y -> or operator

Does a "bitwise or". Each bit of the output is 0 if the corresponding bit of x AND of y is 0, otherwise it's 1.

~ x -> complement operator

Returns the complement of x - the number you get by switching each 1 for a 0 and each 0 for a 1. This is the same as -x - 1.

x ^ y -> xor operator

Does a "bitwise exclusive or". Each bit of the output is the same as the corresponding bit in x if that bit in y is 0, and it's the complement of the bit in x if that bit in y is 1.

