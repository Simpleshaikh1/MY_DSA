//Naive approach

function countWindowDistinct(win, k){
    let dist_count = 0;

    for(let i = 0; i < k; i++){
        for(let j = 0; j < i; j++){
            if(win[i] === win[j]){
                break
            }

            if(j === i){
                dist_count++
            }
        }
    }

    return dist_count;
}

function countDistinct(arr, n, k){
    for(let i = 0; i <= n - k; i++){
        return console.log(countWindowDistinct(arr.slice(i, arr.length), k))
    }
}


//Using hash



let arr = [1, 2, 1, 3, 4, 2, 3], K = 4;
 
countDistinct(arr, arr.length, K);