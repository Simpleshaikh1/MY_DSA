// Longest Subarray with 0 Sum

function maxLen(arr){
    let n = arr.length;
    let count = 0;
    let max_length = 0;
    for(let i = 0; i < n; i++){
      for(let j = i; j < n; j++){
        count += arr[j];
        if(count === 0){
            max_length = Math.max(max_length, j - i + 1)
        }
      }
    }
    return max_length
}


//Using hashmap

function maxLen(arr){
    let presum = new Map();

    let sum = 0;
    let max_len = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];

        if(sum === 0){
            max_len = i + 1;
        }
        if(presum.has(sum)){
            max_len = Math.max(max_len, i - presum.get(sum))
        }else{
            presum.set(sum, i)
        }
    }

    return max_len
}

const arr = [15, -2, 2, -8, 1, 7, 10, 23];
console.log(maxLen(arr));