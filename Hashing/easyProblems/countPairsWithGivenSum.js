//Using native approach

function countPairs(arr, target){
    let n = arr.length;
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(arr[i] + arr[j] === target){
                count ++
            }
        }
    }

    return count;
}

//Best approach, two pointer technique

function countPairs(arr, target){
    let n = arr.length;
    arr.sort((a, b) =>  a - b);

    let left = 0, right = n - 1;

    while(left < right){
        if(arr[left] + arr[right] === target){
            count ++
        }else if(arr[left] + arr[right] > target){
            right --
        }else{
            left ++
        }
    }
}

//Using hash

function countPairs(arr, target){
    const freq = new Map();

    let cnt = 0;

    for(let i = 0; i < arr.length; i++){
        if(freq.has(target - arr[i])){
            cnt += freq.get(target - arr[i])
        }

        freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
    }

    return cnt
}