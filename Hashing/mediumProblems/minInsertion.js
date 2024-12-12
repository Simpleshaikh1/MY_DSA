function minInsertion(str){
    let n = str.length;
    let res  = 0;

    let count = new Array(26);

    for(let i = 0; i < count.length; i++){
        count[i] = 0;
    }

    for(let i = 0; i < n; i++){
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for(let i = 0; i < 26; i++){
        if(count[i] % 2 === 1){
            res++;
        }
    }

    return (res === 0) ? 0 : res - 1;
}

//Using bit manipulation

function minInsertion(str){
    let mask = 0;

    for(let c of str){
        mask ^= (1 << (c.charCodeAt(0) - 'a'.charCodeAt(0)));
    }

    if(mask === 0){
        return 0;
    }

    let count = 0
    while(mask){
      count += mask & 1;
      mask = mask >> 1;
    }

    return count - 1;
}

    // Driver program 
    let str = "geeksforgeeks"; 
    console.log(minInsertion(str)); 