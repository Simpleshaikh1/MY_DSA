// Input: k = 3, arr[] = {1, 2, 3, 4, 1, 2, 3, 4}
// Output: false
// All duplicates are more than k distance away.

//Naive approach

function checkDuplicateWithinK(arr, k){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        for(let c = 1; c <= k && (i + c) < n; c++){
            let j = i + c;
            if(arr[i] === arr[j]){
                return true;
            }
        }
    }

    return false;
}


//Using Hash;

function checkDuplicateWithinK(arr, k){
    let s = new Set();
    let n = arr.length;

    for(let i = 0; i < n; i++){
        if(s.has(arr[i])){
            return true;
        }
        s.add(arr[i])

        if(i >= k){
            s.delete(arr[i - k]);
        }
    }

    return false
}

const arr = [10, 5, 3, 4, 3, 5, 6];
console.log(checkDuplicateWithinK(arr, 3) ? "Yes" : "No");