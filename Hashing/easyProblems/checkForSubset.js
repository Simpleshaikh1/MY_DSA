// Check if an array is subset of another array

//Naive approach
function isSubset(arr1, arr2){
    let m = arr1.length;
    let n = arr2.length;

    for(let i = 0; i < n; i++){
        let found = false;
        for(let j = 0; j < m; j++){
            if(arr2[i] === arr1[j]){
                found = true;
                break;
            }
        }
        if(!found) return false;
    }
    return true;
}


//Using sorting and Two Pointer technique;

function isSubset(arr1, arr2){
    arr1.sort((a,b) => a - b);
    arr2.sort((a,b) => a - b);

    let i = j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            i++;
        }else if(arr1[i] === arr2[j]){
            i++;
            j++
        }else{
            return false;
        }
    }
    return j === arr2.length;
}

//Using hashing method 0(m + n)time and 0(m)space

function isSubsetUsingHashing(arr1, arr2){
    const hashSet = new Set(arr1);

    for(const num of arr2){
        if(!hashSet.has(num)){
            return false;
        }
    }

    return true;
}