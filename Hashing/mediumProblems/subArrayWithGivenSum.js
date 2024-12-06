// Naive approach

function subArraySum(arr, sum){
    let n = arr.length;

    let curr_sum, i, j;

    for(i = 0; i < n; i++){
        curr_sum = 0;

        for(j = i; j < n; j++){
            curr_sum = curr_sum + arr[j];

            if(curr_sum === sum){
                console.log("Sum found between indexes" + i + " and " + j);
                return;
            }
        }
    }

    console.log("no subArray found")
}

//Using hash

function subArraySum(arr, sum){
    let n = arr.length;

    let curr_sum = 0;
    let start = 0;
    let end = -1;
    let hashMap = new Map();

    for(let i = 0; i < n; i++){
        curr_sum = curr_sum + arr[i];

        if(curr_sum - sum === 0){
            start = 0;
            end = i;
            break
        }

        if(hashMap.has(curr_sum - sum)){
            start = hashMap.get(curr_sum - sum) + 1;
            end = i;
            break;
        }

        hashMap.set(curr_sum, i);

        if(end == -1){
            console.log('no subarray with given sum exists')
        }else{
            console.log("sum found between indexes" + start + "to" + end)
        }
    }
}

let arr = [2, 12, -2, -20, 10];
let sum = -10;
subArraySum(arr, sum)