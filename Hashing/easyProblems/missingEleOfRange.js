function missingEleInRange(arr, low, high) {
  let missing = [];

  for (let i = low; i < high; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }

    if (!found) {
      missing.push(i);
    }
  }
  for (let i = 0; i < missing.length; i++) {
    console.log(missing[i] + " ");
  }
}

//Using sorting method

function missingEleInRange(arr, low, high) {
  arr.sort((a, b) => a - b);

  let index = ceilindex(ar, low, 0, ar.length - 1);
  let x = low;

  while (index < ar.length && x <= high) {
    if (ar[index] != x) {
      document.write(x + " ");
    } else index++;
    x++;
  }

  while (x <= high) {
    document.write(x + " ");
    x++;
  }
}

function ceilindex(ar, val, low, high) {
  if (val < ar[0]) return 0;
  if (val > ar[ar.length - 1]) return ar.length;

  let mid = Math.floor((low + high) / 2);
  if (ar[mid] == val) return mid;
  if (ar[mid] < val) {
    if (mid + 1 < high && ar[mid + 1] >= val) return mid + 1;
    return ceilindex(ar, val, mid + 1, high);
  } else {
    if (mid - 1 >= low && ar[mid - 1] < val) return mid;
    return ceilindex(ar, val, low, mid - 1);
  }
}

// Print all elements of range
// [low, high] that are not present
// in arr[0..n-1]
function printMissing(arr, low, high) {
  // Create boolean array of
  // size high-low+1, each index i
  // representing whether (i+low)th
  // element found or not.
  let points_of_range = Array(high - low + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    // if ith element of arr is in
    // range low to high then mark
    // corresponding index as true in array
    if (low <= arr[i] && arr[i] <= high) points_of_range[arr[i] - low] = true;
  }

  // Traverse through the range and print all
  // elements whose value is false
  for (let x = 0; x <= high - low; x++) {
    if (points_of_range[x] == false) document.write(low + x + " ");
  }
}


//Using Hashing;

function missingEleInRange(arr, low, high){
    let set = new Set();

    for(let i = 0; i < arr.length; i++){
        set.add(arr[i])
    }

    for(let i = low; i <= high; i++){
        if(!set.has(i)){
            console.log(i + " ")
        }
    }
}

const arr = [1, 3, 5, 4];
const low = 1,
  high = 10;

// Function call
findMissing(arr, low, high);
