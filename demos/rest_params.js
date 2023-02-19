/* eslint-disable */

function test(a, b, ...params) {
  return params;
}
console.log(test(1, 2, 3, 4));
console.log(...test(1, 2, 3, 4));
