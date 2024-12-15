function foo(a, b) {
  if (a === 0) {
    return b;
  }
  return foo(a - 1, a + b);
}
console.log(foo(5, 1)); //Output: 15
console.log(foo(0,1)); //Output: 1
console.log(foo(3, 0)); //Output: 6
console.log(foo(-1, 1)); //Stack overflow error