//Naive approach:  Using temp arry.

function pushZerosToEnd(arr){
    let n = arr.length;
    let temp = new Array(n);

    let j = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] !== 0){
            temp[j++] = arr[i]
        }
    }

    do{
        temp[j++] = 0
    }while(j < n);

    for (let i = 0; i < n; i++){
        arr[i] = temp[i]
    }
}



//Better approach, Two reversal

function pushZerosToEnd(arr){
    let n = arr.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] !== 0){
            arr[count++] = 0
        }
    }

    do{
        arr[count++] = 0;
    }while(count < n)
}

//Expected approach , treversal swapping

function pushZerosToEnd(arr){
    let n = arr.length;
    let count = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] !== 0){
            [arr[i], arr[count]] = [arr[count], arr[i]];
            count++;
        }
    }
}

const arr = [1, 2, 0, 4, 3, 0, 5, 0];
pushZerosToEnd(arr);

// Print the modified array
console.log(arr.join(" "));