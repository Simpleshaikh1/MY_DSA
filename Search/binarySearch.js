// Binary search is used on a sorted array, it splits the array into halves, by finding the middle and comparing it with the target value
// If the target value is equal to the middle index, then it terminates by returning the index, if the target value is higher than the midlde , it moves to the right and split that to halves
// It continues until it finds the right target, and if the target value is lesser than the middle, it searches to the left.

//Binary search can be implemented in two ways
// 1. Iterative Binary Search Algorithm.
// 2. Recursive Binary Search Algorithm.

// ITERATIVE METHOD
function binarySearch(arr, x){
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while(high >= low){
        mid = low + Math.floor((high - low) / 2);

        if(arr[mid] == x){
            return mid;
        }

        if(arr[mid] > x){
            high = mid -1;
        }else{
            low = mid + 1;
        }
    }

    return -1;
}


// RECURSIVE METHOD

function binarySearchRecursive(arr, low, high, x){
    if(high >= low){
        let mid = low + Math.floor((high - low) / 2);

        if(arr[mid] == x){
            return mid;
        }

        if(arr[mid] > x){
            return binarySearchRecursive(arr, low, mid - 1, x);
        }

        return binarySearchRecursive(arr, mid + 1, high, x)
    }

    return -1;
}

arr = new Array(2, 3, 4, 10, 40);
x = 10;
n = arr.length;
result = binarySearchRecursive(arr, 0, n - 1, x);
if (result == -1)
    console.log("Element is not present in array")
    else
    {
        console.log("Element is present at index "
                    + result);
    }