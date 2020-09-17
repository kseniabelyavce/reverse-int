module.exports = function reverse (n) {
  if (n < 10 && n >= 0) {
    return n;
  }
  else {
    let chars = Math.abs(n).toString().split('')

    for (let l = 0, r = chars.length - 1; l < r; l++, r--) {
      [chars[l], chars[r]] = [chars[r], chars[l]]
    }

    return parseInt(chars.join(''), 10)
  }
}


