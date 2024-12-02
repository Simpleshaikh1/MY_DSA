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


//Using Hash

function canPairs(arr, k){
    let n = arr.length;
    if(n % 2 !== 0) return false;

    const freq = new Map();

    for(let x of arr){
        const rem = ((x % k) + k) % k;
        freq.set(rem, (freq.get(rem) || 0) + 1)
    }

    for(let x of arr){
        const rem = ((x % k) + k) % k;
        if(2 * rem === k){
            if((freq.get(rem) || 0) % 2) return false;
        }

        else if(rem === 0){
            if((freq.get(rem) || 0) % 2 !== 0 ) return false;
        }

        else if((freq.get(rem) || 0) !== (freq.get(k - rem) || 0)){
            return false;
        }
    }

    return true;
}


//Efficient approach for small K

function canPairs(arr, k){
    if(arr.length % 2 !== 0) return false;

    let freq = new Array(k).fill(0);

    for(let x of arr){
        let rem = x % k;

        if(freq[(k - rem ) % k] !== 0){
            freq[(k - rem ) % k ]--;
        }else{
            freq[rem]++
        }
    }

    for(let count of freq){
        if(count !== 0) return false;
    }

    return true;
}
// Driver code
let arr = [92, 75, 65, 48, 45, 35];
let k = 10;
console.log(canPairs(arr, k) ? "True" : "False");