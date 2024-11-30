//Iterative Approach  0(n)
function largestElement(arr){
    let n = arr.length;
    let largest = -Infinity
    
    for(let i = 0; i < n; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }

    return largest
}


//Recursive Approach

function largestElement(arr, i){
    if(i === arr.length - 1){
        return arr[i]
    }

    let recMax = largestElement(arr, i + 1);

    return Math.max(recMax, arr[i])
}

let arr = [10, 324, 45, 90, 9808];
console.log(Math.max(...arr));