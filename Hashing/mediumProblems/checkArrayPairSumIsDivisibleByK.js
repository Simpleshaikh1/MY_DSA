// Check If Array Pair Sums Divisible by k

// Input: arr[] = [9, 7, 5, 3], k = 6 
// Output: True 
// We can divide the array into (9, 3) and (7, 5). Sum of both of these pairs is a multiple of 6.


// Input: arr[] = [92, 75, 65, 48, 45, 35], k = 10 
// Output: True 
// We can divide the array into (92, 48), (75, 65) and (45, 35). The sum of all these pairs are multiples of 10.

//Naive approach

function canPairs(arr, k){
    let n = arr.length;

    if(n % 2 === 1){
        return false
    }

    let count = 0;
    let vis = new Array(n).fill(-1);
    for(let i = 0; i < n; i++ ){
        for(let j = i + 1; j < n; j++){
            if((arr[i] + arr[j]) % k === 0 && vis[i] === -1 && vis[j] === -1){
                count ++;
                vis[i] = 1;
                vis[j] = 1;
            }
        }
    }

    return (count === n / 2);
}

// Driver code
let arr = [92, 75, 65, 48, 45, 35];
let k = 10;
console.log(canPairs(arr, k) ? "True" : "False");