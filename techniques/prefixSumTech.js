// Input: arr[] = {10, 20, 10, 5, 15}
// Output: prefixSum[] = {10, 30, 40, 45, 60}

function prefixSum(arr, prefixSum){
    prefixSum[0] = arr[0];

    for(let i = 0; i < arr.length; ++i){
        prefixSum[i] = prefixSum[i - 1] + arr[i]
    }
}