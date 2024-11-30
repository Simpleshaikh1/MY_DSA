//iterative method;

function subArrays(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            let bucket = []
            for(let k = i; k <= j ; k++){
                bucket.push(arr[k])
            }
            console.log(bucket.join(" "))
        }
    }
}

//Recursive approach

function subArrays(arr, start, end){
    if(end == arr.length)
        return;

    else if(start > end)
        subArrays(arr, 0, end + 1)

    else{
        for(let i = start; i < end; i++){
            console.log(arr[i] + ", ")
        }
        console.log(arr[end] + " ")
        subArrays(arr, start + 1, end)
    }
    return;
}


let arr = [1, 2, 3, 4]
subArrays(arr, 0, 0)
// n * (n + 1)/ 2 = 3 * 4/2 = 3*2 = 6;
// [1], [1, 2], [2], [1, 2, 3], [2, 3], [3]

// 1 , 2 , 3

