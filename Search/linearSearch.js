function linearSearch(arr, n, x){
    for (let i = 0; i < n; i++){
        if(arr[i] == x){
            return i;
        }
    }
    return -1
}

// Driver code

let arr = [ 2, 3, 4, 10, 40 ];
let x = 10;
let n = arr.length;

// Function call
let result = linearSearch(arr, n, x);
(result == -1)
    ? console.log("Element is not present in array")
    : console.log("Element is present at index " + result);


function linearSearch(arr, l, r, k){
    let m;
    while(l <= r){
        m = l + Math.floor(r - l) / 2;
        if(arr[m] == k){
            return m
        }

        if(arr[m] < k){
            l = m + 1
        }else{
            r = m - 1   
        }
    }

    return -1;
}