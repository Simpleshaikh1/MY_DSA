// Input: arr[] = { 1, 2, 3, 4}, arr2[] = { 2, 3, 4, 5, 8 }
// Output: 3
// Explanation: We need to remove 2, 3 and 4 from any array.

// Input: arr[] = { 4, 2, 4, 4}, arr2[] = { 4, 3 }
// Output: 1
// Explanation: We need to remove 4 from arr2[]

// Input : arr[] = { 1, 2, 3, 4 }, arr2[] = { 5, 6, 7 }
// Output : 0
// Explanation: There is no common element in both.


//Using hashing

function minRemove(arr1, arr2){
    let countA = {};
    let countB = {};
    let res  = 0;

    for(let num of arr1){
        countA[num] = (countA[num] || 0) + 1;
    }

    for(let num of arr2){
        countB[num] = (countB[num] || 0) + 1;
    }

    for(let key in countA){
        if(countB.hasOwnProperty(key)){
            res += Math.min(countA[key], countB[key])
        }
    }

    return res;
}