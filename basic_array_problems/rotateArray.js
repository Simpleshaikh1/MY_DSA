//Rotate array clockwise or right

// Rotate one by one

function rotateArray(arr, d){
    let n = arr.length;

    for(let i = 0; i < d; i++){
        let last = arr[n - 1];
        for (let j = n - 1; j > 0; j--){
            arr[j] = arr[j - 1]
        }
        arr[0] = last
    }
}

// Using temporary array
function rotateArray(arr, d){
    let n = arr.length;
    let temp = new Array(n);

    d %= n;

    for(let i = 0; i < d; i++){
        temp[i] = arr[n - d + i]
    }

    for(let i = 0; i < n - d; i++){
        temp[i + d] = arr[i];
    }

    for(let i = 0; i < n; i++){
        arr[i] = temp[i]
    }
}

//Using joggling algorithm

function rotateArray(arr, d){
    let n = arr.length;
    d %= n;
    let cycle = gcd(n, d);

    for(let i = 0; i < cycle; i++){
        let currIdx = i;
        let currEle = arr[currIdx];

        do{
            let nextIdx = (currIdx + d) % n;
            let nextEle = arr[nextIdx];

            arr[nextIdx] = currEle;

            currEle = nextEle;
            currIdx = nextIdx;
        }while(currIdx !== i)
    }
}
function gcd(a, b){
    while(b != a){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


//Using reversal Algorithm

function rotateArray(arr, d){
    let n = arr.length;
    d %= n;

    arr.reverse();

    reverseArray(arr, 0, d - 1);

    reverseArray(arr, d, n - 1);
}

function reverseArray(arr, start, end){
    while (start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--
    }
}
let arr = [1, 2, 3, 4, 5, 6, 8, 9, 3];
let d = 4;

rotateArray(arr, d);

console.log(arr.join(' '));
