function minCost(a){
    const n = a.length;
    return (n - 1) * Math.min(...a)
}

const a = [4, 3, 2, 7, 3, 10, 23843, 742, 83849, 47392];
console.log(minCost(a));