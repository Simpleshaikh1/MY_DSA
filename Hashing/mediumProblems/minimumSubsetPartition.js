function numOfSubset(arr){
    let n = arr.length;

    let count = 1;

    arr.sort((a, b) => a - b)

    for(let i = 0; i < n-1; i++){
        if(arr[i] + 1 !== arr[i + 1])
            count++
    }

    return count;
}

//Hashmap

function countSubsets(arr){
    let hash = new Set(arr)

    let count = 0;

    for(let x of arr){
        if(!hash.has(x - 1)){
            let j = x;

            while(hash.has(j)){
                j++
            }

            count++
        }
    }
    return count
}

let arr = [100, 56, 5, 6, 102, 58, 101, 57, 7, 103];
console.log(countSubsets(arr));