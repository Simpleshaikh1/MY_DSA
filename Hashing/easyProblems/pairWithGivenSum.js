// Naive approach

function twoSum(arr, target){
    let n = arr.target;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(arr[i] + arr[j] === target){
                return true
            }
        }
    }

    return false;
}

//better approach with sorting and binary search;
function binarSearch(arr, left, right, target){
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);

        if(arr[mid] === target){
            return true;
        }

        if(arr[mid] > arr[target]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return false;
}
function twoSum(arr, target){
    let n = arr.length
    arr.sort((a, b) => a - b);

    for(let i = 0; i < n; i++){
        let complement = target - arr[i];

        if(binarSearch(arr, i + 1, arr.length - 1, complement)){
            return true;
        }
    }
    return false;
}



//Better approach two, sorting and two pointers technique;

function twoSum(arr, target){
    arr.sort((a, b) => a - b);

    let left = 0, right = arr.length - 1;

    while(left < right){
        let sum  = arr[left] + arr[right];

        if(sum === target){
            return true
        }else if(sum > target){
            right --
        }else{
            left ++
        }
    }
}

//Using hash

function twoSum(arr, target){
    let set = new Set();

    for(let num of arr){
        let complement = target - num;

        if(set.has(complement)){
            return true;
        }

        set.add(num)
    }

    return false;
}

let arr = [0, -1, 2, -3, 1];
let target = -2;

// Call the twoSum function and print the result
if (twoSum(arr, target))
    console.log("true");
else 
    console.log("false");