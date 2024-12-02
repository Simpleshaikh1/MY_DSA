// Input: arr[] = {2, 7, 6, 1, 4, 5}, k = 3
// Output: 4
// Explanation: The subarray is {7, 6, 1, 4} with sum 18, which is divisible by 3.

//Naive approach

function longestSubarrWthSumDivByK(arr, k){
    let n = arr.length;

    let max = 0;

    for(let i = 0; i < n ; i++){
        let sum1 = 0;
        for(let j = i; j < n; j++){
            sum1 += arr[j];
            if(sum1 % k === 0){
                max = Math.max(max, j - i + 1)
            }
        }
    }

    return max;
}