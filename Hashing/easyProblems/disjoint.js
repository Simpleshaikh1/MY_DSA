//Naive approach of two disjointed array

function disjoint(arr1, arr2){
    let m = arr1.length;
    let n = arr2.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(arr1[j]  === arr2[i]){
                return false
            }
        }
    }
    return true;
}

//Using two pointer technique

function disjoint(a, b){
    a.sort((a,b) => a - b);
    b.sort((a,b) => a - b);

    let i = j = 0;

    while(i < a.length && j < b.length){
        if(a[i] === b[j]){
            return false;
        }

        if(a[i] < b[j]){
            i++
        }else{
            j++
        }
    }
    return true;
}


//Using hashing

function disjointHashing(a, b){
    let st = new Set();

    for(let ele of a){
        st.add(ele)
    }

    for(let ele of b){
        if(st.has(ele))
            return false;
    }

    return true;
}
