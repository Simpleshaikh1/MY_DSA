// Naive Approach
function reverseArray(arr){

    let n = arr.length;
    let temp = new Array()
    for(let i = 0; i < n; i++){
        temp[i] = arr[n - 1 - i]
    }

    for(let i = 0; i < n; i++){
        arr[i] = temp[i]
    }

}

// let arr = [1,2,3,4,5]
// reverseArray(arr)

// console.log(arr.join(" "));


// Expected approach, Two Pointer technique;

function reverseArray(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        // console.log([arr[right], arr[left]])
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;

        right --;

    }
}

//Expected approach , swapping elements

function reverseArray(arr){
    let n = arr.length;
    for(let i = 0; i < n/2; i++){
        let temp = arr[i]
        arr[i] = arr[n - i - 1];
        arr[n - 1 - i] = temp
    }
}


// Using recursion;

function reverseArrayRec(arr, l, r){
    if(l >= r){
        return;
    }

    [arr[l], arr[r]] = [arr[r], arr[l]];

    reverseArrayRec(arr, l + 1, r-1)
}

function reverseArray(arr){
    let n = arr.length;
    reverseArrayRec(arr, 0, n - 1)
}


// Using inbuilt method

// function reverseArray(arr){
//     arr.reverse();
// }
let arr = [1,2,3,4,5]
reverseArray(arr.reverse())

console.log(arr)