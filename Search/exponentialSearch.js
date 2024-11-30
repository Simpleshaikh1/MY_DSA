//Find the range where element x is present 
// do binary search on the above found range

//Binary search

function binarySearch(arr, x, low, high){
    if(high >= low){
        let mid = low + Math.floor((high - low) / 2);

        if(x == arr[mid]){
            return mid;
        }

        if(arr[mid] > x){
            return binarySearch(arr, x, low, mid - 1)
        }

        return binarySearch(arr, x, mid + 1, high);
    }

    return -1
}

function exponentSearch(arr, n, x){
    if(arr[0] == x)
        return 0;

    let i = 1;
    while(i < n && arr[i] <= x)
        i = i * 2;

    return binarySearch(arr, x, i/2, Math.min(i, n-1))
}


let arr = [2, 3, 4, 10, 40];
let n = arr.length;
let x = 10;
let result = exponentSearch(arr, n, x);
if (result == -1)
     console.log("Element is not present in array");
else
    console.log("Element is present at index " + result);