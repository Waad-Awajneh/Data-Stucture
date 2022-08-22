/* Create a function that takes a number and return an array of Fibonacci numbers of this number 
Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .
Each subsequent number is the sum of the previous two.
ex:8 [0,1,1,2,3,5,8,13,21] 
A Fibonacci sequence is defined as follow: F ( n ) = F ( n − 1 ) + F ( n − 2 ) F 1 = 1 , F 2 = 1*/


/* Iterative solutions  The solution has a complexity in o ( n )function fibonacci(number) */

function fibonacci_iter1(number) {
  if (number <= 2) return 1;

  const fibonacciSequenc = [0, 1, 1];
  for (let i = 3; i <= number; i++) {
    fibonacciSequenc[i] = fibonacciSequenc[i - 1] + fibonacciSequenc[i - 2];
  }
  return fibonacciSequenc;
}

console.log("Fibonacci Sequence using => Iterative  : "+ fibonacci_iter1(8));



/* Improve Space complexity by storing juct last two value rether than array */

function fibonacci_iter2(number) {
  if (number <= 2) return 1;

  let a = 1,
    b = 1;
  for (let i = 3; i <= number; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log("Fibonacci Sequence using => Iterative -Improve Space complexity : "+fibonacci_iter2(8));



/*Fibonacci using Recursive
t it takes a lot of time to solve a Fibonacci sequence, even when number <50
 The reason it takes time is that we compute the same solutions multiple times */

function fibonacciRecursive(number) {
  if (number <= 2) return 1;
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

console.log("Fibonacci Sequence using => Recursive : "+fibonacciRecursive(8));




/*Fibonacci using a tail Recursive A tail recursion is a recursive function in which no computation is done after the
  return of recursive call. Many compilers optimize to change a recursive call to a tail recursive or an iterative call.*/

function fibonacciTailRecursive(number, a, b) {
  if (number <= 2) return a;
  return fibonacciTailRecursive(number - 1, a + b, a);
}

//warpper
function fibonacciTail(n) {
  return fibonacciTailRecursive(n, 1, 1);
}

console.log("Fibonacci Sequence using => A Tail Recursive : "+ fibonacciTail(8));







/***************************************************************************************************************************** */
/***************************************************************************************************************************** */
/***************************************************************************************************************************** */

/*Create a function that takes a number and return the factorial of this number 
ex:  5   120 */


/* A  recursive function to calculate factorial*/
function factorial(num) {
  if (num == 1) return 1;

  let fact = num * factorial(num - 1);

  return fact;
}

console.log("factorial Using recursive => "+factorial(5));


/* A tail recursive function to calculate factorial */
function factorialTailRecursive(n, a) {
  if (n == 0) return a;

  return factorialTailRecursive(n - 1, n * a);
}

// A wrapper
function fact(n) {
  return factorialTailRecursive(n, 1);
}


console.log("factorial Using a Tail recursive => " + fact(5));
