# Stack Overflow Bug in Recursive JavaScript Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow.  The `bug.js` file contains a function that recursively calls itself. When the input is a negative number, the base case (`a === 0`) is never reached, leading to excessive function calls and a stack overflow.

The `bugSolution.js` file provides a corrected version of the function that handles negative inputs gracefully.