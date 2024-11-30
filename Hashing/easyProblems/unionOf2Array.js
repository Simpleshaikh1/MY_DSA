// Input : a[] = {1, 2, 3, 2, 1}, b[] = {3, 2, 2, 3, 3, 2}
// Output : {3, 2, 1}
// Explanation: 3, 2 and 1 are the distinct elements present in either array.

//Using Naive method

function unionOf2Array(a, b){
    let res = [];

    for(let i = 0; i < a.length; i++){
        let j;
        for(j = 0; j < res.length; j++){
            if(res[j] === a[i])
                break;
        }
        if(j === res.length)
            res.push(a[i])
    }

    for(let i = 0; i < b.length; i++){
        let j;
        for(j = 0; j < res.length; j++){
            if(res[j] === b[i])
                break;
        }

        if(j === res.length)
            res.push(b[i])
    }

    return res;
}


//Using Hash set

function unionOf2Array(a, b){
    let st = new Set();

    for(let i = 0; i < a.length; i++){
        st.add(a[i])
    }

    for(let i = 0; i < b.length; i++){
        st.add(b[i])
    }

    let res = [];

    for(let it of st){
        res.push(it)
    }

    return res;
}

const a = [1, 2, 3, 2, 1];
const b = [3, 2, 2, 3, 3, 2];

const res = unionOf2Array(a, b);

console.log(res.join(" "));