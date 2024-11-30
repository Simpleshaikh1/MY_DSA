function oneSidedSearch(A, key) {
  let n = A.length;
  let lg = parseInt(Math.log(n - 1) / Math.log(2)) + 1;

  let pos = 0;

  for (let i = lg; i >= 0; i--) {
    if (A[pos] == key) {
      return pos;
    }

    let new_pos = pos | (1 << i);

    if (new_pos < n && A[new_pos] <= key) {
      pos = new_pos;
    }
  }

  return ((A[pos] == key) ? pos : -1)
}

let A = [-2, 10, 100, 250, 32315];
console.log(oneSidedSearch(A, 32315));
