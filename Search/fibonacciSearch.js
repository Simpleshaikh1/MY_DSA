function binarySearch(arr, l, r, k){
    let m;
    while(r > l){
        m = l + Math.floor(r - l)/2;
        if(arr[m] == k){
            return m;
        }

        if(arr[m] > k){
            r = m - 1
        }else{
            l = m + 1
        }
    }

    return -1
}

// using fewer comparison 

function binarySearch(arr, l, r, key){
    let m;
    while(r - l > 1){
        m = l + Math.floor(r - l) / 2;
        if(arr[m] <= key){
            l = m;
        }else{
            r = m;
        }
    }

    if(arr[l] == key){
        return l
    }
    if(arr[r] == key){
        return r
    }

    return -1;
}

// finding floor value of an input key in an array

function Floor(arr, l, r, key){
    let m;
    while( r - l > 0){
        m = l + Math.floor(r - l)/2;
        if(arr[m] <= key){
            l = m
        }else{
            r = m
        }
    }

    return arr[l];
}

function Floor(arr, size, key){
    if(key < arr[0]){
        return -1;
    }

    return Floor(arr, 0, size, key);
}


//Find number of occurence of duplicate element

function getRightPosition(arr, l, r, key){
    let mid;
    while(r - l > 1){
        mid = l + Math.floor(r - l) / 2;
        if(arr[mid] <= key){
            l = mid
        }else{
            r = mid
        }
    }

    return arr[l]
}

function getLeftPosition(arr, l, r, key){
    let mid;
    while(r - l > 1){
        mid = l + Math.floor(r - l) / 2;
        if(arr[mid] >= key){
            r = mid
        }else{
            l = mid
        }
    }

    return arr[r]
}

function countOccurence(arr, size, key){
    let left = getLeftPosition(arr, -1, size - 1, key);
    let right = getRightPosition(arr, 0, size, key);

    if(arr[left] === key && key === arr[right]){
        return right - left + 1;
    }
    return 0;
}


//find the minimum of a rotated array

function BinarySearchIndexOfMinimumRotatedArray(arr, l, r){
    let m;
    if(arr[l] <= arr[r]) return l;

    while(l <= r){
        if(l == r) return l;

        m = l + Math.floor(r - l) / 2;

        if(arr[m] < arr[r]){
            r = m;
        }else{
            l = m + 1;
        }
    }

    return -1;
}

function BinarySearchIndexOfMinimumRotatedArray(A, size){
    return BinarySearchIndexOfMinimumRotatedArray(A, 0, size-1);
}

//Exercise
