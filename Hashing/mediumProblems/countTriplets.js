// Sum - Count all triplets with given sum

// Input: arr[] = {0, -1, 2, -3, 1}, target = -2
// Output: 2
// Explanation: Two triplets that add up to -2 are:
// arr[0] + arr[3] + arr[4] = 0 + (-3) + (1) = -2
// arr[1] + arr[2] + arr[3] = (-1) + 2 + (-3) = -2

//Using Naive Method
function countTriplets(arr, target){
    let n = arr.length;
    let cnt = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            for(let k = j + 1; k < n; k++){
                if(arr[i] + arr[j] + arr[k] === target)
                    cnt += 1
            }
        }
    }

    return cnt;
}

//Using Hash set
function getPairsCount(arr, idx, target){
    let freq = {}
    let count = 0;

    for(let i = idx; i < arr.length; i++){
        if(freq[target - arr[i] !== undefined]){
            count += freq[target - arr[i]]
        }
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    return count;
}

function countTriplets(arr, target){
    let cnt = 0;
    let n = arr.length;

    for(let i = 0; i < n - 1; i++){
        const rem = target - arr[i];
        cnt += getPairsCount(arr, i + 1, rem)
    }
    return cnt;
}



const arr = [0, -1, 2, -3, 1];
const target = -2;

console.log(countTriplets(arr, target));