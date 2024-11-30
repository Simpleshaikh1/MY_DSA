// Input: arr[] = {1, 4, 1, 4, 5}, k = 3
// Output: 4
// Explanation: There are 4 pairs with absolute difference 3, the pairs are {1, 4}, {1, 4}, {1, 4} and {4, 1} 

//Native approach

function countPairs(arr, k){
    let n = arr.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(Math.abs(arr[i] - arr[j] === k)){
                count += 1;
            }
        }
    }

    return count;
}

//Using sorting and two pointers

function countPairs(arr, k){
    let n = arr.length;
    let count = 0;

    arr.sort((a, b) => a - b);
    let i = 0, j = 0;

    while(j < n){
        if(arr[j] - arr[i] < k)
            j++
        else if(arr[j] - arr[i] > k)
            i++

        else{
            const elem1 = arr[i], elem2 = arr[j];

            let count1 = 0, count2 = 0;

            while(j < n && arr[j] === elem2){
                j++;
                count2++;
            }

            while(i < n && arr[i] === elem1){
                i++;
                count1;
            }

            if(elem1 === elem2)
                count += (count1 * (count1 - 1)) / 2;
            else
                count += (count1 * count2)
        }
    }

    return count;
}


// Using hash map or dictionary;

function countPairs(arr, k){
    const n = arr.length;

    let freq = {};
    let cnt = 0;

    for(let i = 0; i < n; i++){
        if((arr[i] + k) in freq)
            cnt += freq[arr[i] + k];

        if((arr[i] - k ) in freq)
            cnt += freq[arr[i] - k];

        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    return cnt;
}


const arr = [1, 4, 1, 4, 5];
const k = 3;

console.log(countPairs(arr, k));