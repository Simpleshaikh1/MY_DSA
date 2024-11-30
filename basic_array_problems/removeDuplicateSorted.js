// Using hash.

function removeDuplicates(arr){
    let s = new Set();
    let idx = 0;
    for(let i = 0; i < arr.length; i++){
        if(!s.has(arr[i])){
            s.add(arr[i])
            arr[idx++] = arr[i]
        }
    }
    return idx;
}


//Efficient approach since the array is sorted, we do not need to maintain a hash set.

function removeDuplicates(arr){
    let n = arr.length;
    let idx = 1;

    for(let i = 1; i < n; i++){
        if(arr[i] !== arr[i - 1]){
            arr[idx++] = arr[i]
        }
    }
    return idx;
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicates(arr);

for(let i = 0; i < newSize; i++){
    console.log(arr[i] + " ")
}