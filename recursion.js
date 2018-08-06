/*
Finds path to target, by recursively multiplying some number by 3, and/or adding 5.
*/

function findPath(target) {
  function check(n, history) {
    if (n === target) {
      return history;
    } else if (target < n) {
      return null;
    } else {
      return check(n+5, `${history} + 5`) || check(n*3, `${history} * 3`);
    }
  }
  return check(1, "1");
}

console.log(findPath(32));
