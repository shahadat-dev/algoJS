(function fizzBuzz(num) {
  n = 1;
  while (n <= num) {
    if (n % 15 === 0) console.log('FizzBuzz');
    else if (n % 3 === 0) console.log('Fizz');
    else if (n % 5 === 0) console.log('Buzz');
    else console.log(n);
    n++;
  }
})(20);
