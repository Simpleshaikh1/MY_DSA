//Native

function subset(arr){
    let n = arr.length;
    arr.sort();

    let res = 0;

    for(let i = 0; i < n ; i++){
        let count = 1;
        for(; i < n; i++){
            if(arr[i] === arr[i + 1]){
                count ++
            }else{
                break;
            }
        }

        res = Math.max(res, count);
    }
    return res;
}

//Using Hash;

function subset(arr){
    let set = {};

    let res = 0;

    for(let i = 0; i < arr.length; i++){
        if(set.hasOwnProperty(arr[i])){
            let val = set[arr[i]];
            delete set[arr[i]];
            set[arr[i]] = val + 1
        }else{
            set[arr[i]] = 1;
        }
    }

    for(const [key, value] of Object.entries(set)){
        res = Math.max(res, value)
    }
}


function subsetGFG(arr){
    let uniqueELe = new Set();

    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(!uniqueELe.has(arr[i])){
            uniqueELe.add(arr[i])
        }else{
            count += uniqueELe.size;
            uniqueELe.clear();
            uniqueELe.add(arr[i])
        }
    }

    return count + uniqueELe.size
}
// Driver Code
let arr = [ 5, 6, 9, 3, 4, 3, 4 ];
console.log(subset(arr));