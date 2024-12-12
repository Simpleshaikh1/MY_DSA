//time complx 0(n^2)
function maxDiff(arr){
    let n = arr.length;
    let subSet_1 = 0, subSet_2 = 0;

    for(let i = 0; i < n - 1; i++){
        let two_occurence = true;
        for(let j = i + 1; j < n - 1; j++){
            if(arr[i] === arr[j]){
                two_occurence = false;
                arr[i] = arr[j] = 0;
                break;
            }
        }

        if(two_occurence){
            if(arr[i] > 0){
                subSet_1 += arr[i]
            }else{
                subSet_2 += arr[i]
            }
        }
    }

    return Math.abs(subSet_1 - subSet_2)
}

//time complx 0(n log n);

function maxDiff(arr){
    let n = arr.length;
    let result = 0;

    arr.sort((a, b) => a- b)

    for(let i = 0; i < n - 1; i++){
        if(arr[i] !== arr[i + 1]){
            result += Math.abs(arr[i])
        }else{
            i++
        }
    }

    if(arr[n - 2] !== arr[n - 1]){
        result += Math.abs(arr[n - 1])
    }

    return result;
}


//time complx 0(n);

function maxDiff(arr){
    let hashPositive = new Map();
    let hashNegative = new Map();

    let subsetSum_1 = 0;
    let subsetSum_2 = 0;

    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] > 0){
            if(hashPositive.has(arr[i])){
                hashPositive.set(arr[i], hashPositive.get(arr[i] + 1));
            }else{
                hashPositive.set(arr[i], 1)
            }
        }
    }

    for(let i = 0; i <= arr.length - 1; i++ ){
        if(arr[i] > 0 && hashPositive.has(arr[i])){
            if(hashPositive.get(arr[i]) === 1){
                subsetSum_1 += arr[i];
            }
        }
    }

    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] < 0){
            if(hashNegative.has(arr[i])){
                hashNegative.set(arr[i], hashNegative.get(arr[i] + 1))
            }else{
                hashNegative.set(arr[i], 1)
            }
        }
    }

    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] < 0 && hashNegative.has(arr[i])){
            if(hashNegative.get(arr[i]) === 1){
                subsetSum_2 += arr[i]
            }
        }
    }

    return Math.abs(subsetSum_1 - subsetSum_2)
}



// Driver program 
  
let arr = [ 1, 2, 1, 3, 4, 5, 4, 6, 7, 5 ]; 
let n = arr.length; 
   
console.log("Maximum Difference = "
                       + maxDiff(arr, n)); 