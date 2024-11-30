//Native approach  0(n * logn)  // sorting takes 0(n*logn) // traversing the array takes 0(n), (n * log n + n) = 0(n*logn)f

function secondLargestElement2(arr){
    let n = arr.length;
    arr.sort((a,b) => a -b);

    for(let i = n - 2; i < n; i--){
        if(arr[i] !== arr[n - 1]){
            return arr[i]
        }
    }
    return -1;
}


//Best Approach, 0(n), space= 0(1);

// traversing the array twice, first travers, we find the maximum element, the second traversal, we find the maximum element ignoring the first one.

function secondLargestElement(arr){
    let n = arr.length;
    let largest = -Infinity, secondLargest = -Infinity;

    for(let i = 0; i < n; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }

    for(let i = 0; i < n; i++){
        if(arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

let array = [2,7,10, 1, 89, 273, 273, 4, 90, 12]
console.log(secondLargestElement(array))

// Optimal approach, 0(n), space = 0(1);

function secondLargestElement1(arr){
    let n = arr.length;
    let largest = -Infinity, secondLargest = -Infinity;

    for(let i = 0; i < n; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i]
        }else if(arr[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}


