function hashing(table, tsize, arr, N){
    for(let i = 0; i < N; i++){
        let hv = arr[i] % tsize;

        if(table[hv] == -1){
            table[hv] = arr[i]
        }else{
            for(let j = 1; j <= tsize; j++){
                let t = (hv + j * j) % tsize;
                if(table[t] == -1){
                    table[t] = arr[i];
                    break
                }
            }
        }
    };

    printArray(table);
}

function printArray(arr)
{

    // Iterating and printing the array
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " ");
    }
}