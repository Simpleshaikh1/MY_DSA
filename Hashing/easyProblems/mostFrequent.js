function mostFre(arr, n){
    let max = 0;
    let max_freq_count;

    for(i = 0; i < n; i++){
        let count = 0;
        for(let j = 0; j < n; j++){
            if(arr[i] === arr[j]){
                count++
            }
        }

        if(count > max){
            max = count;
            max_freq_count = arr[i]
        }
    }

    return max_freq_count
}

//Using sorting method
function mostFre(arr, n){
    arr.sort();

    let max_count = 1, res = arr[0];
    let curr_count = 1;

    for(let i = 1; i < n; i++){
        if(arr[i] == arr[i - 1]){
            curr_count++
        }else{
            curr_count = 1;
        }

        if(curr_count > max_count){
            max_count = curr_count;
            res = arr[i - 1];
        }
    }

    return res;
}

//Using hash

function mostFre(arr, n){
    let hash = new Map();

    for(let i = 0; i < n; i++){
        if(hash.has(arr[i])){
            hash.set(arr[i], hash.get(arr[i]) + 1)
        }else{
            hash.set(arr[i], 1)
        }
    }

    let max_count = 0, res = -1;
    hash.forEach((value, key) => {
        if(max_count < value){
            res  = key;
            max_count = value;
        }
    });

    return res;
}

let arr = [40, 50, 30, 40, 50, 30, 30];
let n = arr.length;
console.log(mostFrequent(arr, n));