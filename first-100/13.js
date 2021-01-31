// Time complexity: O(n)
// Space complexity: O(n)

var romanToInt = function (str) {
  const pairs = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  }

  return str.split('').reduce((acc, cur, idx) => {
    if (pairs[str[idx + 1]] > pairs[cur]) {
      return acc - pairs[cur]
    }
    return acc + pairs[cur]
  }, 0)
}

console.log(romanToInt('LVIII')) //  58
console.log(romanToInt('MCMXCIV')) //  1994
