function isEqual(a,b){
    let n = a.length;
    let m = b.length;

    if(n != m) return false;

    let map = new Set();

    let count = 0;

    for(let i = 0; i < n; i++){
        if(map.get(a[i]) == null) map.set(a[i], 1);
        else{
            count = map.get(a[i]);
            count++;
            map.set(a[i], count)
        }
    }

    for (let i = 0; i < N; i++) {
        if (!map.has(arr2[i])) return false;
    
        if (map.get(arr2[i]) == 0) return false;
    
        count = map.get(arr2[i]);
        --count;
        map.set(arr2[i], count);
      }
    
      return true;
}