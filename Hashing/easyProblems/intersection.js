// Naive approach;

function intersection(a, b){
    let res = [];

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(a[i] === b[j] && !res.includes(a[i])){
                res.push(a[i])
            }
        }
    }

    return res
}

//Using Hash set

function intersection(a, b){
    let s = new Set(a);
    let res = [];

    for(let i = 0; i < b.length; i++){
        if(s.has(b[i])){
            res.push(b[i]);
            s.delete(b[i])
        }
    }
    return res;
}