# Project Euler 014 - Longest Collatz Sequence

The following iterative sequence is defined for the set of positive integers:

n to n/2 (if n is even)
n to 3n + 1 (if n is odd)

Using the rule above and starting with 13, we generate the following sequence:

    13,40,20,10,5,16,8,4,2,1

It can be seen that this sequence (starting at 13 and finishes at 1) contains 10 terms.  Although it has not been proved yet (Collatz Problem) it is thought all starting numbers finish at 1.

Which starting number, under the given `limit` (e.g. 1000000), produces the longest chain?

**NOTE:**Once the chain starts, the terms are allowed to go above `limit`.

The aim is to investigate this using HTML Forms and JavaScript.

Information at [Project Euler 014](https://projecteuler.net/problem=14)

## UX

**Getting Started**

Enter the limit as a whole number between 2 and 2000000 (e.g. 13) and 
click on the Submit Button.  You will see the `limit` (number) you have entered as well as the
starting number under the `limit` that produces the longest chain, unless you have made an
invalid input.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

* Not enter anything in the input field
* Entering a number less than 2 or greater than 2000000
* Entering text other than a number (e.g. bus)
* Entering a number that is not an integer

As a user, I expect the function `longestCollatzSequence(14)` to return a number.

As a user, I expect the function `longestCollatzSequence(14)` to return 9.

As a user, I expect the function `longestCollatzSequence(5847)` to return 3711.

As a user, I expect the function `longestCollatzSequence(46500)` to return 35655.

As a user, I expect the function `longestCollatzSequence(54512)` to return 52527.

As a user, I expect the function `longestCollatzSequence(100000)` to return 77031.

As a user, I expect the function `longestCollatzSequence(1000000)` to return 837799.

**Information Architecture**

The function `longestCollatzSequence(limit)` returns a number, where `limit` is a number between
2 and 2000000.

## Features

Allows the user to enter a number, as well as getting the starting number, below that number.
Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-014) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)
- [W3Schools](https://w3schools.com)