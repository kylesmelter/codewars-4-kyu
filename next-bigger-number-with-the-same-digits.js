// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n){
    // We'll start by sorting the input 'n' into the largest number it can be,
    // and then we'll turn it from a string to a number using '+'
    let a = +String(n).split('').sort((a,b) => b-a).join('');
    // Next, we'll create a for-loop starting from the next largest value than 'n,'
    // and going up to the value of 'a'
    for (let i = n + 1; i <= a; i++) {
        // Inside the loop we'll have an if-conditional that will check to see
        // if the value of 'a' === the value of 'i' after the individual values
        // of 'i' have been sorted from largest to smallest, and if they are equal
        // we'll return the value of i
        if (a == +String(i).split('').sort((a,b) => b-a).join('')) {
            return i;
        };
   };
   // At the end, we'll return -1 if there is no next largest number
   return -1
};