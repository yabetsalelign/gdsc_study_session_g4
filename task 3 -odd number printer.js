// we can start by defining a function that inside can loop through the numbers from 0 up to the given num to print the odd number pattern.
function printOddNumberPattern(num) {
    for (let i = 0; i <= num; i++) {
      if (i % 2 !== 0) {
        let pattern = "";
        for (let j = 1; j <= i; j += 2) {
          pattern += j + " ";
        }
        console.log(pattern);
      }
    }
  }
  
  // we can Call the function by giving it a number like lets say 21
  printOddNumberPattern(21);
  