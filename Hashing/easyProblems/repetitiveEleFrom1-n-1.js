//Naive approach

function findRepeating(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(arr[i] === arr[j]){
                return arr[i]
            }
        }
    }
    return -1
}


//Using sorting method

function findRepeating(arr){
    let n = arr.length;
    arr.sort((a, b) =>  a - b);

    for(let i = 0; i < n; i++){
        if(arr[i]  != i + 1){
            return arr[i]
        }
    }

    return -1
}

//Using hash

function findRepeating(arr){
    const s = new Set();
    for(let x of arr){
        if(s.has(x)){
            return x
        }
        s.add(x)
    }
    return -1;
}

let arr= [ 9, 8, 2, 6, 1, 8, 5, 3, 4, 7 ];
let N = arr.length;

// Function call
console.log(findRepeating(arr, N));