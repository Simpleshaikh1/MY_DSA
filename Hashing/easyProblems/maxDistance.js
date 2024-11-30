// Input: arr = [1, 1, 2, 2, 2, 1]
// Output: 5
// Explanation: distance for 1 is: 5-0 = 5, distance for 2 is : 4-2 = 2, So max distance is 5.

//Naive appraoch

function maxDistance(arr){
    let res = -1;

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                res = Math.max(res, j - i)
            }
        }
    }

    return res;
}


//Using Hashing

function maxDistance(arr){
    let mp = {}
    let res = 0;

    for(let i = 0; i < arr.length; i++){
        if(!(arr[i]) in mp){
            mp[arr[i]] = i
        }else{
            res = Math.max(res, i - mp[arr[i]])
        }
    }

    return res;
}