//Iterative approach 0(n)

function isSorted(arr){
    let n = arr.length;

    if(n === 0 || n === 1){
        return true
    }

    for(let i = 1; i < n; i++){
        if(arr[i - 1] > arr[i]){
            return false;
        }
    }
    return true
}


// Recursive approach
function isSorted(arr, n){
    if(n === 0 || n === 1){
        return true
    };

    return arr[n - 1] >= arr[n - 2] && isSorted(arr, n - 1)
}

let arr = [20, 23, 45, 78, 88];
let n = arr.length
console.log(isSorted(arr, n))