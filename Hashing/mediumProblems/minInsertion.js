function minInsertion(str){
    let n = str.length;

    let res = 0;

    let count = new Array(26)
    for(let i = 0; i < count.length; i++){
        count[i] = 0;
    }

    for(let i = 0; i < n; i++){
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for(let i = 0; i < 26; i++){
        if(count[i] % 2 === 1){
            res++
        }
    }

    return (res === 0) ? 0 : res - 1
}

    // Driver program 
    let str = "geeksforgeeks"; 
    console.log(minInsertion(str)); 