function sentinelSearch(arr, n, key){
    let last = arr[n - 1];
    arr[n - 1] = key;
    var i = 0;

    while(arr[i] != key){
        i++
    }

    arr[n - 1] = last;

    if((i < n - 1) || (arr[n - 1] == key))
        return console.log(`${key} foudn at position ${i}`)
    else
        console.log('Nothing found')
        return -1
}


    // Driver code
    
    var arr = [ 10, 20, 180, 30, 60, 50, 110, 100, 70 ];
    var n = arr.length;
    var key = 10;

    sentinelSearch(arr, n, key);