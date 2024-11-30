//Naive approach 0(n^2), 0(1)
// two loops, outer loop and inner loop to compare 

function leaders(arr){
    let n = arr.length;
    let result = new Array(n);

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(arr[i] < arr[j]){
                break;
            }
        }  

        if(j === n){
            result.push(arr[i])
        }
    }
}


//Optimized approach ,  0(n), 0(1)

function leaders(arr){
    let result = [];
    let n = arr.length;

    let maxRight = arr[n - 1];

    result.push(maxRight);

    for(let i = n - 2; i >= 0; i--){
        if(arr[i] > maxRight){
            maxRight = arr[i];
            result.push(maxRight)
        }
    }

    result.reverse();
    return result
}

const arr = [16, 17, 4, 3, 5, 2];
const result = leaders(arr);

console.log(result.join(" "));