// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

function sumStrings(a,b) { 
  // Let's first create a variable, 'num,' and set it equal to the BigInt versions
  // of a and b. We need to use BigInt in case we're dealing with massive numbers
  let num = BigInt(a) + BigInt(b);
  // Now we'll turn the value of 'num' to a string using .toString()
  num = num.toString();
  // All we need to do now is return 'num!'
  return num;
};