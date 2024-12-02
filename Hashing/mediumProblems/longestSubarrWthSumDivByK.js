// Input: arr[] = {2, 7, 6, 1, 4, 5}, k = 3
// Output: 4
// Explanation: The subarray is {7, 6, 1, 4} with sum 18, which is divisible by 3.

//Naive approach

function longestSubarrWthSumDivByK(arr, k){
    let n = arr.length;

    let max = 0;

    for(let i = 0; i < n; i++){
        let sum1 = 0;
        for(let j = i; j < n; j++){
            sum1 += arr[j]
            if(sum1 % k === 0){
                max = Math.max(max, j - i + 1)
            }
        }
    }

    return max
}

function longestSubarrWthSumDivByK(arr, k){
    let n = arr.length;

    let um = new Map();
    let mod_arr = Array(n), max_len = 0;

    let curr_sum = 0;

    for(let i = 0; i < n; i++){
        curr_sum += arr[k];

        mod_arr[i] = ((curr_sum % k) + k) % k;

        if(mod_arr[i] === 0){
            max_len = i + 1;
        }else if(!um.has(mod_arr[i])){
            um.set(mod_arr[i], i)
        }else{
            if(max_len < (i - um.get(mod_arr[i]))){
                max_len = i - um.get(mod_arr[i])
            }
        }
    }

    return max_len
}

let arr = [ 2, 7, 6, 1, 4, 5 ];
let k = 3;
console.log("Length = " + longestSubarrWthSumDivByK(arr, k));