// Sum – Find All Triplets with Zero Sum

// Input: arr[] = {0, -1, 2, -3, 1}
// Output: {{0, 1, 4}, {2, 3, 4}}
// Explanation:  Two triplets with sum 0 are:
// arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
// arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0

//Naive approach

function findTriplets(arr){
    let n = arr.length;

    let res = [];

    for(let i = 0; i < n - 2; i++){
        for(let j = i + 1; j < n - 1; j++){
            for(let k = j + 1; k < n; k++){
                if(arr[i] + arr[j] + arr[k] === 0){
                    res.push([i, j, k])
                }
            }
        }
    }

    return res;
}


// const arr = [0, -1, 2, -3, 1];
// const res = findTriplets(arr);
// res.forEach(triplet => {
//     console.log(triplet[0] + " " + triplet[1] + " " + triplet[2]);
// });


//Using Hash
function findTriplets(arr){
    let resSet = new Set();
    let n = arr.length;
    let mp = new Map();

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let sum = arr[i] + arr[j]
            if(!mp.has(sum)){
                mp.set(sum, [])
            }
            mp.get(sum).push([i, j])
        }
    }

    for(let i = 0; i < n; i++){
        let rem = -arr[i];
        if(mp.has(rem)){
            let pairs = mp.get(rem);
            for(let p of pairs){
                if(p[0] !== i && p[1] !== i){
                    let curr = [i, p[0], p[1]].sort((a,b) => a - b);
                    resSet.add(curr.join(","))
                }
            }
        }
    }
    return Array.from(resSet).map(triplet => triplet.split(",").map(Number));
}

const arr = [0, -1, 2, -3, 1];
const ans = findTriplets(arr);
ans.forEach(triplet => {
    console.log(`${triplet[0]} ${triplet[1]} ${triplet[2]}`);
});
