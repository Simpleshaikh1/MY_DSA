let MAX = 1000;

let has = new Array(MAX + 1);

for(let i = 0; i < MAX + 1; i++){
    has[i] = new Array(2);
    for(let j = 0; j < 2; j++){
        has[i][j] = 0;
    }
}

function search(x){
    if(x >= 0){
        if(has[x][0] == true){
            return true
        }else{
            return false
        }
    }

    x = Math.abs(x);
    if(has[x][1] == true){
        return true
    }else{
        return false;
    }
}

function insert(a){
    for(let i = 0; i < a.length; i++){
        if(a[i] >= 0){
            has[a[i]][0] = true;
        }else{
            let abs_i = Math.abs(a[i])
            has[abs_i][1] = true;
        }
    }
}

// Driver code 
let a=[-1, 9, -5, -8, -5, -2];
    insert(a);
    let X = -5;
    if (search(X) == true)
    {
        console.log("Present");
    } 
    else
    {
        console.log("Not Present");
    }